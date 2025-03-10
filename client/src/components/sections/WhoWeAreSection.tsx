import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "wouter";
import { fadeIn } from "@/lib/motion";

const WhoWeAreSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        variants={fadeIn("up")}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto glass-card p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="clay-icon">
              <Users className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">ما کی هستیم؟</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            وبی یه تیم خلاق و پیشرو و نوآور در زمینه طراحی و توسعه وبه. که به شما کمک میکنه یکی از بهترین وب سایت های ایران رو داشته باشید.
          </p>
          <div className="text-center">
            <Link href="/about">
              <Button variant="outline" className="group">
                درباره تیم ما
                <span className="mr-2 group-hover:mr-4 transition-all">←</span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoWeAreSection;
