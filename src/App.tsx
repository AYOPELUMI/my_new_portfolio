import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './sections/navbar';
import Hero from './sections/hero';
import Footer from './sections/footer';
import { useGLTF } from '@react-three/drei';
import Contact from './sections/contact';
import TechStack from './sections/techStack';

// Lazy load other sections
const ShowCase = lazy(() => import('./sections/showcase'));
const FeatureCards = lazy(() => import('./sections/featureCards'));
const Experience = lazy(() => import('./sections/experience'));
// const TechStack = lazy(() => import('./sections/techStack'));
const Testimonials = lazy(() => import('./sections/testimonials'));
// const Contact = lazy(() => import('./sections/contact'));





// Improved placeholder with loading states
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalSections = 5; // Update this with your actual count

  const handleSectionLoad = () => {
    setLoadedCount(prev => {
      const newCount = prev + 1;
      if (newCount === totalSections) setIsLoading(false);
      return newCount;
    });
  };

  return (
    <>

      <Navbar />
      <Hero />


      <Suspense fallback={<LogoPlaceholder />}>
        <ShowCase onLoad={handleSectionLoad} />
        <FeatureCards onLoad={handleSectionLoad} />
        <Experience onLoad={handleSectionLoad} />
      </Suspense>
      <TechStack onLoad={handleSectionLoad} />
      <Testimonials onLoad={handleSectionLoad} />
      <Contact onLoad={handleSectionLoad} />

      <Footer />
    </>
  );
}

// Logo placeholder component
function LogoPlaceholder() {
  return (
    <div className="flex-center min-h-screen">
      <img
        src="/images/fav.png"
        alt="Loading..."
        className="w-32 h-32 animate-pulse"
      />
    </div>
  );
}

export default App;