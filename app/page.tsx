import Hero from '../components/Hero';
import Venues from '../components/Venues';
import Testimonials from '../components/Testimonials';
import Advantages from '../components/Advantages';
import Signup from '../components/Signup';
import Process from '../components/Process';
import ProudMember from '../components/ProudMember';
import Carousel from '../components/Carousel';
import { Metadata } from 'next';

// Add this metadata export for SEO
export const metadata: Metadata = {
  title: 'Grid Monitor – Regulatory Information Management for ERCOT',
  description: 'Comprehensive download of every filing in the system and track what is important to you. Never miss a mention of a docket, control number, or bill again. Bill tracking software',
  keywords: 'venues, events, booking, [other relevant keywords]',
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
};

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full">
        <Hero />
        <Venues />
        <Testimonials />
        <Advantages />
        <Carousel />
        <Signup />
        <Process />
        <ProudMember />
      </main>
    </div>
  );
}