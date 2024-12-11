import { createRoot } from "react-dom/client";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Technology } from "./components/Technology";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layer */}
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-custom-radial"></div>

      {/* Content Layer */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technology />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
