import { useState } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ReportaModule from "./components/ReportaModule";
import Dashboard from "./components/Dashboard";
import Tutoriales from "./components/Tutoriales";
import Footer from "./components/Footer";
import ReportPage from "./pages/ReportPage";

export default function App() {
  const [showReports, setShowReports] = useState(false);

  if (showReports) {
    return <ReportPage onBack={() => setShowReports(false)} />;
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar onNavigateReports={() => setShowReports(true)} />
      </div>
      <main>
        <Hero />
        <HowItWorks />
        <ReportaModule />
        <Dashboard />
        <Tutoriales />
      </main>
      <Footer />
    </div>
  );
}
