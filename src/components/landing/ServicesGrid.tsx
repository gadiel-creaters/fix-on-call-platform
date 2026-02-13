import { motion } from "framer-motion";
import { Battery, Droplets, Wrench, Car, Cog, Fuel } from "lucide-react";

const services = [
  { icon: Battery, title: "Battery Jump Start", desc: "Dead battery? We'll get you running in minutes." },
  { icon: Droplets, title: "Flat Tire Fix", desc: "Puncture repair or spare tire swap on the spot." },
  { icon: Wrench, title: "Engine Repair", desc: "Diagnostics and on-site engine troubleshooting." },
  { icon: Car, title: "Towing Service", desc: "Safe towing to the nearest garage when needed." },
  { icon: Cog, title: "Brake Service", desc: "Emergency brake pad replacement and repair." },
  { icon: Fuel, title: "Fuel Delivery", desc: "Ran out of fuel? We'll bring it to you." },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What We Fix</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Services for every breakdown
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
