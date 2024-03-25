import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import SkillsBanner from "./components/SkillsBanner.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SkillsBanner />
    </div>
  );
}

export default App;
