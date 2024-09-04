import "./App.css";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Work from "./Components/Work.jsx";
import Testimonial from "./Components/Review.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
