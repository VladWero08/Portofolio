import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CookieProvider } from "./Cookie";
import ProtectedRoute from "./navigation/ProtectedRoute.jsx";

import Navbar from "./navigation/Navbar.jsx";
import LogIn from "./register/LogIn.jsx";
import Register from "./register/Register.jsx";

import Home from "./home/Home.jsx";
import Contact from "./contact/Contact.jsx";
import Projects from "./projects/Projects.jsx";
import About from "./about/About.jsx";

function App() {
  return (
    <CookieProvider>
      <div>
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route index element={<Home/>}/>
            <Route 
              path="/projects" 
              element={
                <ProtectedRoute Component={Projects}></ProtectedRoute>
              }
            />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/log-in" element={<LogIn/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </CookieProvider>
  );
}

export default App;
