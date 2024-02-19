import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import FooterSection from "./pages/Footer"; // Import the FooterSection component
import Home from "./pages/Home";
import Nav from "./pages/Nav"; // Import the Nav component
import Portifolia from "./pages/Portifolia";

function App() {
  return (
    <div className="App">
      <Nav /> {/* Include the navigation bar at the top of the page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="portifolia" element={<Portifolia />} />
      </Routes>
      <FooterSection /> {/* Include the footer at the bottom of the page */}
    </div>
  );
}

export default App;
