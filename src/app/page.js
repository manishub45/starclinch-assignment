import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import AlternateSection from "./components/AlternateSection";
import FeatureRing from "./components/FeatureRing";
import HugSection from "./components/HugSection";
import FinalCTASection from "./components/FinalCTASection";
import CategoriesExpand from "./components/CategoriesExpand";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      
      <FeatureRing />
    

      <AlternateSection
        title="Our Top Performers"
        text="Get introduced to our elite artists who have rocked hundreds of shows."
        image="/images/singer1.jpg"
        reverse={false}
      />

      <AlternateSection
        title="Crowd Favorites"
        text="These artists always get the crowd going — high energy, great vibe!"
        image="/images/singer2.jpg"
        reverse={true}
      />

      <AlternateSection
        title="Exclusive Performances"
        text="Book these premium acts for your event & make it memorable."
        image="/images/singer3.jpg"
        reverse={false}
      />
      <HugSection/>
      <FinalCTASection/>

    </>
  );
}
