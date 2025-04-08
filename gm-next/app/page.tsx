import Hero from '../components/Hero';
import Venues from '../components/Venues';
import Testimonials from '../components/Testimonials';
import Advantages from '../components/Advantages';
import Signup from '../components/Signup';
import Process from '../components/Process';
import ProudMember from '../components/ProudMember';
import Carousel from '../components/Carousel'; // Import Carousel component

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full">
        <Hero /> {/* Hero component */}
        <Venues /> {/* Venues component */}
        <Testimonials /> {/* Testimonials component */}
        <Advantages /> {/* Advantages component */}
        <Carousel /> {/* Carousel component */}
        <Signup /> {/* Signup component */}
        <Process /> {/* Process component */}
        <ProudMember /> {/* ProudMember component */}
      </main>
    </div>
  );
}
