import Hero from '../components/Hero';
import Venues from '../components/Venues';
import Testimonials from '../components/Testimonials';
import Advantages from '../components/Advantages';
import Signup from '../components/Signup';
import Process from '../components/Process';
import ProudMember from '../components/ProudMember';
import Carousel from '../components/Carousel';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import { Metadata } from 'next';

// Add this metadata export for SEO
export const metadata: Metadata = {
  title: 'Grid Monitor – Regulatory Information Management for ERCOT',
  description: 'Comprehensive download of every filing in the system and track what is important to you. Never miss a mention of a docket, control number, or bill again. Bill tracking software',
  keywords: 'ERCOT tracking software, regulatory information management for ERCOT, ERCOT bill tracking software, PUCT Meeting Summaries,Texas Legislature Bill Tracking, ERCOT regulatory information',
  openGraph: {
    title: 'Grid Monitor - Helps you collect, organize, and update your ERCOT, PUCT, and TXLEGE regulatory information',
    description: 'Comprehensive download of every filing in the system and track what is important to you. Never miss a mention of a docket, control number, or bill again. Bill tracking software',
    images: [
      {
        url: '/gm-icon30.png', // Path to your Open Graph image
        width: 30,
        height: 30,
        alt: 'GridMonitor',
      },
    ],
  },
  icons: {
    icon: '/favicon.png', // Ensure the favicon is correctly referenced here
    apple: '/apple-touch-icon.png', // Optional: Add an Apple touch icon if available
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full">
        <Hero />
        <FadeInOnScroll offset={40} duration={1200}>
          <Venues />
        </FadeInOnScroll>
        
     
        <FadeInOnScroll offset={60} duration={800}>
          <Testimonials />
        </FadeInOnScroll>
        
       
        <FadeInOnScroll offset={40} duration={600}>
          <Advantages />
        </FadeInOnScroll>
        
        {/* Regular animation */}
        <FadeInOnScroll offset={40} duration={400}>
          <Carousel />
        </FadeInOnScroll>
        
        {/* Slightly delayed animation */}
        <FadeInOnScroll offset={40} duration={200}>
          <Signup />
        </FadeInOnScroll>
        
        {/* Higher threshold means it needs to be more visible before animating */}
        <FadeInOnScroll offset={40} duration={100}>
          <Process />
        </FadeInOnScroll>
        
        {/* Faster animation for the last component */}
        <FadeInOnScroll offset={40} duration={800}>
          <ProudMember />
        </FadeInOnScroll>
      </main>
    </div>
  );
}