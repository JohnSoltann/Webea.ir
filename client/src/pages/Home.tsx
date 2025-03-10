import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ValuesSection from "@/components/sections/ValuesSection";
import WhyUs from "@/components/sections/WhyUs";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import { staggerContainer } from "@/lib/motion";

const Home = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="overflow-hidden"
    >
      <Hero />
      <WhoWeAreSection />
      <ServicesSection />
      <PortfolioSection />
      <ValuesSection />
      <WhyUs />
      <WhatWeDoSection />
      <TestimonialsSection />
    </motion.div>
  );
};

export default Home;