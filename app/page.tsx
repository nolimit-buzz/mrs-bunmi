import { NavigationSection } from '@/components/sections/NavigationSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { OurCapabilitiesSection } from '@/components/sections/OurCapabilitiesSection'
import { GoalsSection } from '@/components/sections/GoalsSection'
import { ResultsSection } from '@/components/sections/ResultsSection'
import { VideoSection } from '@/components/sections/VideoSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationSection />
      <HeroSection />
      <AboutSection />
      <OurCapabilitiesSection />
      <ResultsSection />
      <GoalsSection />
      <VideoSection />
      <ContactSection />
    </div>
  )
}