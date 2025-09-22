import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero'; 
import Impact from './components/Impact';
import Story from './components/Story'; 
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero /> 
        <Story />
        <Impact />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}