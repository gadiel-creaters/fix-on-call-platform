import { motion } from "framer-motion";
import { MapPin, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Share Your Location",
    description: "Open the app and we'll pinpoint your exact location using GPS. No need to describe where you are.",
  },
  {
    icon: Wrench,
    title: "Get Matched",
    description: "We instantly connect you with the nearest verified mechanic who specializes in your issue.",
  },
  {
    icon: CheckCircle,
    title: "Get Fixed",
    description: "Track your mechanic in real time, get a transparent quote, and pay securely through the app.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Help in 3 easy steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Step {i + 1}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
