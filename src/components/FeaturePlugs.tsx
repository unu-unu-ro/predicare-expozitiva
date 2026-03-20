import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";

export interface FeaturePlug {
  title: string;
  description: string;
  to: string;
  icon: LucideIcon;
  /** Use "primary" for filled button, "outline" for outlined. Defaults to first=primary, rest=outline. */
  variant?: "primary" | "outline";
}

interface FeaturePlugsProps {
  heading?: string;
  subtext?: string;
  plugs: FeaturePlug[];
}

const FeaturePlugs = ({ heading, subtext, plugs }: FeaturePlugsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-10 max-w-lg mx-auto text-center space-y-6"
  >
    {heading && <h3 className="section-title text-lg">{heading}</h3>}
    {subtext && <p className="text-muted-foreground">{subtext}</p>}
    <div className="flex flex-wrap justify-center gap-4">
      {plugs.map((plug, i) => {
        const isPrimary = plug.variant ? plug.variant === "primary" : i === 0;
        return (
          <Button
            key={plug.to}
            asChild
            size="lg"
            variant={isPrimary ? "default" : "outline"}
            className={
              isPrimary
                ? "bg-primary hover:bg-[hsl(var(--navy-dark))] text-primary-foreground"
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }
          >
            <Link to={plug.to}>{plug.title}</Link>
          </Button>
        );
      })}
    </div>
  </motion.div>
);

export default FeaturePlugs;
