import { HomeHeroSection } from '@/components/sections/home-hero';
import { HomeWhatIsSection } from '@/components/sections/home-what-is';
import { HomeProcessSection } from '@/components/sections/home-process';
import { HomeVisualFlowSection } from '@/components/sections/home-visual-flow';
import { HomeWhereItHelpsSection } from '@/components/sections/home-where-helps';
import { HomeTrustSection } from '@/components/sections/home-trust';

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeWhatIsSection />
      <HomeProcessSection />
      <HomeVisualFlowSection />
      <HomeWhereItHelpsSection />
      <HomeTrustSection />
    </>
  );
}
