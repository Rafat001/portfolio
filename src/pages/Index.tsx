import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container max-w-3xl">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <footer className="border-t py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mohammed Majharul Islam
      </footer>
    </main>
  </div>
);

export default Index;
