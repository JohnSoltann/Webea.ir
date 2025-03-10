import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Target, Trophy, Users, Zap, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "تجربه و تخصص",
    description: "بیش از ۱۰ سال تجربه در طراحی وب",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "نتیجه‌محور",
    description: "تمرکز بر اهداف کسب و کار شما",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "کیفیت برتر",
    description: "استفاده از بهترین تکنولوژی‌های روز",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "تیم متخصص",
    description: "همکاری با بهترین متخصصان",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "سرعت بالا",
    description: "تحویل پروژه در کوتاه‌ترین زمان",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "پشتیبانی دائمی",
    description: "ارائه خدمات پشتیبانی ۲۴/۷",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "رضایت مشتری",
    description: "اولویت اول ما رضایت شماست",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn("up")} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            چرا وبّی انتخاب برتر شماست؟
          </h2>
          <p className="text-lg text-gray-600">
            وبّی هفت تفاوت بزرگ با دیگر طراحان سایت رو به شما ارائه می‌ده.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.1)}
              className="glass-card p-6 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up")} className="text-center mt-12">
          <Link href="/benefits">
            <Button size="lg">
              مشاهده همه مزایا
              <span className="mr-2">←</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
