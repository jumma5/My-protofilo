import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import StackSection from "@/components/StackSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <WorkSection />
        <StackSection />
        <EducationSection />
      </main>
    </div>
  );
};

export default Index;
