import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Menu from "./components/menu/Menu";
import Works from "./components/works/Works";
import "./app.scss";
import {useState} from "react"





function App() {
  const [menuOpen,setMenuOpen]  = useState (false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <div style={{display:"flex",alignContent:'center', justifyItems:"center"}}>
          <h4>Site has been moved to: <a href="https://brightonhoods.herokuapp.com/">Click Here</a></h4>
        </div>
    
        {/* <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>  */}
      </div>
      

    </div>
  );
}

export default App;
