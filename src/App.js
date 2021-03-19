import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Global from "./components/globalstyles/Global";
import Navbar from "./components/main-navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";

function App() {
  return (
    <Router>
      <Global />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
          <About />
          <Projects />
          <Contact />
        </Route>
      <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
