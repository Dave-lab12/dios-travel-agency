import { useEffect } from "react";
import "./App.css";
import Home from "./component/home";
import About from "./component/about";
import Destination from "./component/destination";
import Testimonials from "./component/testemonials";
import Contact from "./component/contact";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Home />
      <About />
      <Destination />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
