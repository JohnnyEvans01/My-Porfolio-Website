import React, { useState } from "react";
import Header from "./Components/Header/Header";
import SideDrawer from "./Components/UI/SideDrawer/SideDrawer";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  
  function toggleSideDraw(){
    setShowSideDrawer(!showSideDrawer)
  }

  return (
    <React.Fragment>
      <Header wasClicked={toggleSideDraw}/>
      <SideDrawer clicked={toggleSideDraw} show={showSideDrawer}/>
      <main>
        <Switch>
          <Route path="/contact-me" component={Contact} />
          <Route path="/about-me" component={About} />
          <Route path="/my-works" component={Projects} />
          <Route path="/" component={Home} exact/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
