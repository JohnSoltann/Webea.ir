import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdminLayout from "@/components/layout/AdminLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Benefits from "@/pages/Benefits";
import Contact from "@/pages/Contact";
import Order from "@/pages/Order";
import Dashboard from "@/pages/admin/Dashboard";
import NotFound from "@/pages/not-found";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Router() {
  const [location] = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Increment key to force re-render of the route
    setKey(prev => prev + 1);
  }, [location]);

  const isAdminRoute = location.startsWith("/admin");

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  if (isAdminRoute) {
    return (
      <AdminLayout>
        <Switch>
          <Route path="/admin" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </AdminLayout>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={key}
          className="flex-grow"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
        >
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/benefits" component={Benefits} />
            <Route path="/contact" component={Contact} />
            <Route path="/order" component={Order} />
            <Route component={NotFound} />
          </Switch>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;