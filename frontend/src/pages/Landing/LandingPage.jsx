import Header from "../../components/navigation/Header";
import AnimatedBackground from "../../components/background/AnimatedBackground";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";

const LandingPage = () => {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <Features />
    </>
  );
};

export default LandingPage;