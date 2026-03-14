"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useMilaapFetch from "@/hooks/useMilaapFetch";

export default function FundPage() {
  const { raisedText, goalText, fillWidth, pct, supportersCount } = useMilaapFetch();
  const [activePreset, setActivePreset] = useState(null);
  const [showError, setShowError] = useState(false);
  const inputRef = useRef(null);
  const btnRef = useRef(null);

  const presets = [100, 500, 1000, 5000, 10000];

  const handlePresetClick = (amount) => {
    setActivePreset(amount);
    if (inputRef.current) {
      inputRef.current.value = amount;
      inputRef.current.focus();
    }
    setShowError(false);
  };

  const handleInputChange = () => {
    setActivePreset(null);
    setShowError(false);
  };

  const handleDonate = () => {
    const raw = inputRef.current?.value?.trim();
    const amount = parseInt(raw, 10);

    if (!raw || isNaN(amount) || amount < 1) {
      setShowError(true);
      inputRef.current?.focus();
      return;
    }

    setShowError(false);

    const milaapBase = "https://milaap.org/fundraisers/support-syam-kumar-s-s";
    const url = `${milaapBase}?utm_source=syamkumar-site&amount=${amount}`;

    const btn = btnRef.current;
    if (btn) {
      btn.textContent = "Redirecting to Milaap… 🚀";
      btn.style.opacity = "0.8";
      btn.disabled = true;
    }

    setTimeout(() => {
      window.open(url, "_blank");
      if (btn) {
        btn.innerHTML = 'Donate to Syam\'s Dream <span class="arrow">→</span>';
        btn.style.opacity = "";
        btn.disabled = false;
      }
    }, 900);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleDonate();
  };

  return (
    <div className="fund-page-body">
      {/* Decorative blobs */}
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>

      {/* Top nav */}
      <nav className="top-nav">
        <Link href="/" className="top-nav-logo">Syam</Link>
        <Link href="/" className="top-nav-back">← Back to site</Link>
      </nav>

      <main className="fund-page-main">
        <div className="fund-card">
          <div className="fund-badge">Mission Fundraiser</div>

          <h1 className="fund-heading">
            Help Syam <span>Reach<br />The Sky</span>
          </h1>
          <p className="fund-subtext">
            Syam Kumar is set to become the first person without a leg to skydive from 45,000 feet.
            Your support makes this world record mission possible.
          </p>

          {/* Live Milaap progress */}
          <div className="progress-block">
            <div className="progress-numbers">
              <span className="raised-amount">{raisedText}</span>
              <span className="goal-amount">of {goalText} goal</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" id="fundFill" style={{ width: fillWidth }}></div>
            </div>
            <div className="progress-meta">
              <span>{supportersCount} supporters</span>
              <span>{pct}% funded</span>
            </div>
          </div>

          {/* Preset amounts */}
          <label className="input-label">Choose or enter an amount</label>
          <div className="preset-amounts">
            {presets.map((amount) => (
              <button
                key={amount}
                className={`preset-btn${activePreset === amount ? " active" : ""}`}
                data-amount={amount}
                onClick={() => handlePresetClick(amount)}
              >
                ₹{amount.toLocaleString("en-IN")}
              </button>
            ))}
          </div>

          {/* Custom amount input */}
          <div className="amount-input-row">
            <span className="currency-symbol">₹</span>
            <input
              ref={inputRef}
              className="amount-input"
              type="number"
              min="1"
              step="1"
              placeholder="Enter amount"
              inputMode="numeric"
              autoComplete="off"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button ref={btnRef} className="donate-cta" onClick={handleDonate}>
            Donate to Syam&apos;s Dream <span className="arrow">→</span>
          </button>

          <p className={`fund-error${showError ? " show" : ""}`}>
            Please enter a valid amount (minimum ₹1)
          </p>

          <p className="fund-note">
            You will be securely redirected to Milaap to complete your donation. Your details are safe.
          </p>

          <div className="powered-by">
            Payments powered by{" "}
            <a href="https://milaap.org" target="_blank" rel="noopener noreferrer">Milaap.org</a>
          </div>

          {/* Trust badges */}
          <div className="trust-row">
            <div className="trust-item">🔒 SSL Secure</div>
            <div className="trust-item">🇮🇳 INR Only</div>
            <div className="trust-item">✅ Tax Benefits</div>
          </div>
        </div>
      </main>
    </div>
  );
}
