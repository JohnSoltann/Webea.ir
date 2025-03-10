import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, PhoneCall, Mail } from "lucide-react";
import { SiWhatsapp, SiTelegram } from "react-icons/si";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-[#E6D8FF] to-[#FFE6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", damping: 15 }}
            className="text-center lg:text-right"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              وبی = هویت آنلاین شما
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 text-center">
              زیبایی در طراحی، قدرت در عملکرد
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="lg" className="clay-button w-full">
                      <Rocket className="ml-2 w-5 h-5" />
                      شروع پروژه
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <a 
                        href="https://wa.me/989129686546" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full"
                      >
                        <SiWhatsapp className="w-4 h-4" />
                        واتساپ
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a 
                        href="https://t.me/989129686546" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full"
                      >
                        <SiTelegram className="w-4 h-4" />
                        تلگرام
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a 
                        href="tel:+989129686546"
                        className="flex items-center gap-2 w-full"
                      >
                        <PhoneCall className="w-4 h-4" />
                        تماس
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/contact">
                        <span className="flex items-center gap-2 w-full">
                          <Mail className="w-4 h-4" />
                          فرم تماس
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="clay-button w-full">
                  <PhoneCall className="ml-2 w-5 h-5" />
                  مشاوره رایگان
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="clay-icon w-full h-auto p-8">
                  <img
                    src="/images/modern-web-design.png"
                    alt="طراحی وب مدرن"
                    className="rounded-2xl w-full h-auto transform scale-150"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;