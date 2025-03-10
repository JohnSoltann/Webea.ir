import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Code2, Search, Palette, ShieldCheck, Headphones, Phone, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";
import { MotionButton } from "@/components/ui/motion-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const teams = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: "تیم برنامه‌نویسی",
    members: [
      {
        role: "توسعه‌دهنده ارشد فرانت‌اند",
        skills: ["React.js", "Next.js", "TypeScript"],
        experience: "۸ سال تجربه در توسعه رابط‌های کاربری پیشرفته"
      },
      {
        role: "توسعه‌دهنده ارشد بک‌اند",
        skills: ["Node.js", "Express", "PostgreSQL"],
        experience: "۱۰ سال تجربه در طراحی و پیاده‌سازی API‌ها"
      },
      {
        role: "متخصص DevOps",
        skills: ["Docker", "AWS", "CI/CD"],
        experience: "۶ سال تجربه در مدیریت زیرساخت‌های ابری"
      }
    ]
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "تیم طراحی",
    members: [
      {
        role: "طراح ارشد UI/UX",
        skills: ["Figma", "Adobe XD", "طراحی تعاملی"],
        experience: "۷ سال تجربه در طراحی رابط‌های کاربری"
      },
      {
        role: "طراح گرافیک",
        skills: ["Photoshop", "Illustrator", "برندینگ"],
        experience: "۵ سال تجربه در طراحی هویت بصری"
      },
      {
        role: "متخصص تجربه کاربری",
        skills: ["تحقیقات کاربری", "طراحی تعاملی", "پروتوتایپ"],
        experience: "۶ سال تجربه در بهینه‌سازی تجربه کاربری"
      }
    ]
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: "تیم سئو و محتوا",
    members: [
      {
        role: "متخصص ارشد سئو",
        skills: ["تحقیق کلمات کلیدی", "لینک‌سازی", "تحلیل رقبا"],
        experience: "۸ سال تجربه در بهینه‌سازی موتورهای جستجو"
      },
      {
        role: "تولیدکننده محتوا",
        skills: ["نویسندگی خلاق", "کپی‌رایتینگ", "استراتژی محتوا"],
        experience: "۵ سال تجربه در تولید محتوای دیجیتال"
      }
    ]
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "تیم امنیت",
    members: [
      {
        role: "متخصص امنیت وب",
        skills: ["تست نفوذ", "امنیت API", "رمزنگاری"],
        experience: "۹ سال تجربه در امنیت وب‌سایت‌ها"
      },
      {
        role: "مدیر زیرساخت امن",
        skills: ["مدیریت SSL", "فایروال", "احراز هویت"],
        experience: "۷ سال تجربه در مدیریت زیرساخت‌های امن"
      }
    ]
  },
  {
    icon: <Headphones className="w-12 h-12" />,
    title: "تیم پشتیبانی",
    members: [
      {
        role: "مدیر پشتیبانی",
        skills: ["مدیریت تیکت", "آموزش مشتری", "حل مسئله"],
        experience: "۶ سال تجربه در مدیریت پشتیبانی مشتریان"
      },
      {
        role: "کارشناس پشتیبانی فنی",
        skills: ["عیب‌یابی", "آموزش کاربران", "مستندسازی"],
        experience: "۴ سال تجربه در پشتیبانی فنی"
      }
    ]
  }
];

const About = () => {
  const [_, navigate] = useLocation();

  const handleContactForm = () => {
    navigate('/contact');
  };

  const openTelegram = () => {
    window.open('https://t.me/+989129886546', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/989129886546', '_blank');
  };

  const openPhone = () => {
    window.open('tel:+989129886546', '_blank');
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-950 via-blue-600 to-blue-400">
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/50 rounded-full mix-blend-overlay blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/50 rounded-full mix-blend-overlay blur-3xl"></div>
        </div>

        <motion.div variants={fadeIn("up")} className="text-center mb-16 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-6">
            تیم حرفه‌ای وبی
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            ما تیمی از متخصصان با تجربه هستیم که با همکاری یکدیگر، بهترین راهکارهای دیجیتال را برای کسب و کار شما ارائه می‌دهیم
          </p>
        </motion.div>

        <motion.div variants={fadeIn("up")} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.1)}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all duration-300 group">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 pointer-events-none"></div>

                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      className="p-4 rounded-xl bg-gradient-to-br from-white/20 to-transparent backdrop-blur-lg border border-white/30 shadow-[inset_0_0_12px_rgba(255,255,255,0.2)] group-hover:[animation-play-state:paused]"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="text-blue-200">
                        {team.icon}
                      </div>
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-center text-white relative z-10">
                    {team.title}
                  </h3>

                  <div className="space-y-4 relative z-10">
                    {team.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/30 hover:bg-blue-800/40 transition-colors duration-300"
                      >
                        <h4 className="font-semibold text-lg mb-2 text-white">{member.role}</h4>
                        <p className="text-white text-sm mb-2">{member.experience}</p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="text-xs bg-blue-800/50 text-white px-3 py-1 rounded-full border border-white/20 shadow-sm group-hover:bg-blue-700/50 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-16">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors duration-300 w-full md:w-auto relative overflow-hidden animate-heartbeat"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  animation: "heartbeat 1.5s ease-in-out infinite",
                }}
              >
                <span className="relative z-10">
                  شروع همکاری با ما
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform inline-block">←</span>
                </span>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 w-[200%] h-[200%] -translate-x-1/2 translate-y-[80%] animate-button-glow">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/30 blur-xl transform rotate-45"></div>
                  </div>
                </div>
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 p-2">
              <DropdownMenuItem onClick={openTelegram} className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md">
                <FaTelegram className="w-4 h-4 text-blue-500" />
                <span>تلگرام</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={openWhatsApp} className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md">
                <FaWhatsapp className="w-4 h-4 text-green-500" />
                <span>واتساپ</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={openPhone} className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>تماس</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleContactForm} className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md">
                <MessageCircle className="w-4 h-4 text-purple-500" />
                <span>فرم تماس</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;