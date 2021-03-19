import { BrowserRouter as Router, Route } from "react-router-dom";
import Global from "./components/globalstyles/Global";
import Navbar from "./components/main-navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Global />
      <Navbar />
      <Route exact path="/">
        <Home />
        <About />
        <Projects />
        <Contact />
      </Route>
    </Router>
  );
}

export default App;
