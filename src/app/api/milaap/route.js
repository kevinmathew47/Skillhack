import { NextResponse } from "next/server";

const MILAAP_URL = "https://milaap.org/fundraisers/support-syam-kumar-s-s";

function parseSupportersCount(html) {
  const m = html.match(/<span class="donation-count">([\d,]+)\s+supporters<\/span>/i);
  if (m) return parseInt(m[1].replace(/,/g, ""), 10);
  return null;
}

function parseHtml(html) {
  // Try campaign-data JSON first
  const campaignMatch = html.match(/id="campaign-data"[^>]*>([\s\S]*?)<\/script>/i);
  if (campaignMatch) {
    try {
      const data = JSON.parse(campaignMatch[1]);
      if (data.donorCostBreakupData?.fund_raised) {
        return parseInt(data.donorCostBreakupData.fund_raised.replace(/[^\d]/g, ""), 10);
      }
    } catch (_) {}
  }

  const m1 = html.match(/"fund_raised"\s*:\s*"[₹Rs.\s]*([\d,]+)"/i);
  if (m1) return parseInt(m1[1].replace(/,/g, ""), 10);

  const m2 = html.match(/"total_amount_raised"\s*:\s*(\d+)/i);
  if (m2) return parseInt(m2[1], 10);

  const m3 = html.match(/"amount_raised"\s*:\s*(\d+)/i);
  if (m3) return parseInt(m3[1], 10);

  const m4 = html.match(/Rs\.\s*([\d,]+)/i);
  if (m4) return parseInt(m4[1].replace(/,/g, ""), 10);

  return null;
}

export async function GET() {
  try {
    const response = await fetch(MILAAP_URL, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes (App Router feature)
    });

    if (!response.ok) {
      throw new Error(`Milaap responded with ${response.status}`);
    }

    const html = await response.text();
    const amount = parseHtml(html);
    const supporters = parseSupportersCount(html);

    if (amount === null) {
      throw new Error("Could not parse raised amount from Milaap");
    }

    return NextResponse.json({
      amount,
      supporters: supporters || 0,
      ts: Date.now(),
    });
  } catch (error) {
    console.error("[API/Milaap] Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch data from Milaap", details: error.message },
      { status: 500 }
    );
  }
}
