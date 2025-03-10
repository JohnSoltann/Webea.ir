import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const IntroSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn("up")} className="glass-card p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-6">ما کی هستیم؟</h2>
          <p className="text-lg text-gray-600 mb-8">
            وبی یه تیم خلاق و پیشرو و نوآور در زمینه طراحی و توسعه وبه. که به شما کمک میکنه یکی از بهترین وب سایت های ایران رو داشته باشید.
          </p>
          <Link href="/about">
            <Button variant="outline" className="group">
              ادامه مطلب
              <span className="mr-2 group-hover:mr-4 transition-all">←</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;