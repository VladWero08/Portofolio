import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navigation/Navbar";

import Home from "./home/Home.jsx";
import Contact from "./contact/Contact.jsx";
import Projects from "./projects/Projects.jsx";
import About from "./about/About.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
