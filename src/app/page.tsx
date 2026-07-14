import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { StatsBar } from "@/components/site/stats-bar";
import { FeaturedListings } from "@/components/site/featured-listings";
import { HowItWorks } from "@/components/site/how-it-works";
import { WhyStudents } from "@/components/site/why-students";
import { CampusServices } from "@/components/site/campus-services";
import { CtaSection } from "@/components/site/cta-section";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <FeaturedListings />
        <HowItWorks />
        <WhyStudents />
        <CampusServices />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
