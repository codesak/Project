import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import ReferPage from "./Pages/ReferPage";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
function LayoutsWithNavbar({ width }) {
  return (
    <>
      
      <Navbar width={width} />


      <Outlet />
    </>
  );
}
function App() {
    const [width, setWidth] = useState(window.innerWidth);

    //FUNCTIONS
    useEffect(() => {
      const updateWindowDimensions = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
      };
  
      window.addEventListener("resize", updateWindowDimensions);
  
      return () => window.removeEventListener("resize", updateWindowDimensions);
    }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LayoutsWithNavbar  width={width}/>}>
            <Route path="/" element={<Home  width={width}/>} />
            <Route path="/refer" element={<ReferPage width={width}/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;