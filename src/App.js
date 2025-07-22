import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import GreetingsLoader from "./components/loader/LoaderAnimation";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader ? (
        <GreetingsLoader onFinish={() => setShowLoader(false)} />
      ) : (
        <>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Work />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </>
      )}
    </>
  );
}

export default App;
