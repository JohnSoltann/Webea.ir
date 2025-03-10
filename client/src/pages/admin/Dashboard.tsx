import { Card } from "@/components/ui/card";
import { 
  LayoutGrid, 
  FileText, 
  Image, 
  Users, 
  MessageSquare,
  Eye
} from "lucide-react";
import { Link } from "wouter";

const DashboardCard = ({ 
  title, 
  icon: Icon, 
  value, 
  href 
}: { 
  title: string;
  icon: any;
  value: number;
  href: string;
}) => (
  <Link href={href}>
    <a className="block">
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-lg">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
      </Card>
    </a>
  </Link>
);

const Dashboard = () => {
  // TODO: Fetch real stats from API
  const stats = [
    { title: "صفحات", icon: FileText, value: 12, href: "/admin/content" },
    { title: "رسانه‌ها", icon: Image, value: 45, href: "/admin/media" },
    { title: "کاربران", icon: Users, value: 3, href: "/admin/users" },
    { title: "پیام‌ها", icon: MessageSquare, value: 28, href: "/admin/messages" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">داشبورد</h1>
        <Link href="/">
          <a className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary">
            <Eye className="w-4 h-4" />
            <span>مشاهده سایت</span>
          </a>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">فعالیت‌های اخیر</h2>
        <p className="text-gray-600">به زودی...</p>
      </Card>
    </div>
  );
};

export default Dashboard;