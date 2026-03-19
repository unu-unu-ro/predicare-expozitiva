import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bible.jpg";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
}

const HeroBanner = ({ title, subtitle }: HeroBannerProps) => (
  <div className="relative h-[180px] md:h-[220px] flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-teal-dark/80" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 text-center px-6"
    >
      <h1 className="font-display text-3xl md:text-5xl font-bold text-cream tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-cream/80 text-base md:text-lg max-w-2xl mx-auto font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  </div>
);

export default HeroBanner;
