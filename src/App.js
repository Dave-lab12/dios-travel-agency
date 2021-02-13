import "./App.css";
import Home from "./component/home";
import About from "./component/about";
import Destination from "./component/destination";
import Testimonials from "./component/testemonials";
import Contact from "./component/contact";
function App() {
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
