"use client";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WitnessSection from "@/components/WitnessSection";
import VideoSection from "@/components/VideoSection";
import FeaturedVideo from "@/components/FeaturedVideo";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import MissionSection from "@/components/MissionSection";
import FundCTA from "@/components/FundCTA";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import useMilaapFetch from "@/hooks/useMilaapFetch";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function HomePage() {
  const { raisedText, goalText, fillWidth, supportersCount } = useMilaapFetch();
  useScrollAnimations();

  return (
    <>
      <Loader />
      <Navbar />
      <HeroSection
        raisedAmount={raisedText}
        goalAmount={goalText}
        pillFillWidth={fillWidth}
      />
      <WitnessSection />
      <VideoSection />
      <FeaturedVideo />
      <ProjectsSection />
      <TimelineSection />
      <GallerySection />
      <MissionSection />
      <FundCTA
        raisedText={`${raisedText} raised`}
        goalText={`Goal: ${goalText}`}
        fillWidth={fillWidth}
        supportersCount={supportersCount}
      />
      <NewsSection />
      <Footer />
    </>
  );
}
