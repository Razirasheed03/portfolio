import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <section id="about" className="scroll-mt-16 py-16">
          <About />
        </section>
        <section id="skills" className="scroll-mt-16 py-16">
          <Skills />
        </section>
      <section id="projects" className="scroll-mt-16 py-16">
  <Projects />
</section>

<section className="flex justify-center py-8">
  <Button variant="outline" size="lg" asChild>
    <a href="/projects">View More Projects</a>
  </Button>
</section>

<section id="experience" className="scroll-mt-16 py-16">
  <Experience />
</section>

        <section id="contact" className="scroll-mt-16 py-16">
          <Contact />
        </section>
      </div>
      <Chatbot />
    </main>
  );
}
