import { useEffect } from "react";
import { useLocation, useRoute, Link } from "wouter";
import { 
  Sidebar, 
  SidebarHeader,
  SidebarContent,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  LayoutGrid, 
  FileText, 
  Image, 
  Users, 
  LogOut,
  Settings,
  MessageSquare,
  Bell
} from "lucide-react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [location] = useLocation();
  const [isLoginPage] = useRoute("/admin/login");

  // TODO: Add authentication check
  useEffect(() => {
    // Redirect to login if not authenticated
  }, []);

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="border-l">
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 px-2">
              <SidebarTrigger className="text-[#FF69B4]" />
              <span className="font-semibold heading-gradient">پنل مدیریت وبّی</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/admin">
                  <SidebarMenuButton
                    isActive={location === "/admin"}
                    asChild
                  >
                    <a>
                      <LayoutGrid className="w-5 h-5" />
                      <span>داشبورد</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/content">
                  <SidebarMenuButton
                    isActive={location === "/admin/content"}
                    asChild
                  >
                    <a>
                      <FileText className="w-5 h-5" />
                      <span>مدیریت محتوا</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/media">
                  <SidebarMenuButton
                    isActive={location === "/admin/media"}
                    asChild
                  >
                    <a>
                      <Image className="w-5 h-5" />
                      <span>مدیریت رسانه</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/users">
                  <SidebarMenuButton
                    isActive={location === "/admin/users"}
                    asChild
                  >
                    <a>
                      <Users className="w-5 h-5" />
                      <span>مدیریت کاربران</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/messages">
                  <SidebarMenuButton
                    isActive={location === "/admin/messages"}
                    asChild
                  >
                    <a>
                      <MessageSquare className="w-5 h-5" />
                      <span>پیام‌ها</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/notifications">
                  <SidebarMenuButton
                    isActive={location === "/admin/notifications"}
                    asChild
                  >
                    <a>
                      <Bell className="w-5 h-5" />
                      <span>اعلان‌ها</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin/settings">
                  <SidebarMenuButton
                    isActive={location === "/admin/settings"}
                    asChild
                  >
                    <a>
                      <Settings className="w-5 h-5" />
                      <span>تنظیمات</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto border-t p-2">
            <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-red-600 hover:bg-red-500/10">
              <LogOut className="w-4 h-4" />
              <span>خروج</span>
            </button>
          </div>
        </Sidebar>
        <main className="flex-1 overflow-x-hidden p-8 bg-gradient-to-br from-[#E6D8FF] to-[#FFE6F3]">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;