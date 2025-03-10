import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Code2, Paintbrush2, Search, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Paintbrush2 className="w-8 h-8 text-primary" />,
    title: "طراحی سایت",
    description: "طراحی خلاقانه و منحصر به فرد برای کسب و کار شما",
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "توسعه وب",
    description: "پیاده‌سازی استاندارد با جدیدترین تکنولوژی‌ها",
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "سئو و بهینه‌سازی",
    description: "افزایش رتبه سایت شما در موتورهای جستجو",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "امنیت وب",
    description: "حفاظت از سایت شما در برابر تهدیدات سایبری",
  },
];

// Define animation variants
const containerVariants = {
  hidden: { 
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    }
  }
};

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 heading-gradient">خدمات ما</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ما در وبّی از خوش ذوق‌ترین طراحان سایت و متخصص‌ترین برنامه‌نویس‌ها و سئوکارها استفاده می‌کنیم.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="glass-card p-6 text-center group cursor-pointer">
                <motion.div
                  className="clay-icon mx-auto mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 opacity-90 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button size="lg" className="clay-button group">
              مشاهده تمام خدمات
              <span className="mr-2 transform group-hover:translate-x-1 transition-transform">←</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;