import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { CaseStudies } from "./pages/CaseStudies";
import { Contact } from "./pages/Contact";
import { DemoLab } from "./pages/DemoLab";
import { GitHubShowcase } from "./pages/GitHubShowcase";
import { Home } from "./pages/Home";
import { Leadership } from "./pages/Leadership";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Home />
        <About />
        <Leadership />
        <CaseStudies />
        <DemoLab />
        <Blog />
        <GitHubShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
