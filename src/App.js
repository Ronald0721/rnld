import Home from "./components/Home/home";
import Nav from "./components/Nav/nav";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Services from "./components/Services/services";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
