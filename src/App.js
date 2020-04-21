

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faFileAlt, faEnvelope, faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import MyNavbar from './components/Layout/MyNavbar'
import Footer from './components/Layout/Footer';

library.add(fab, faCheckSquare, faCoffee, faFileAlt, faEnvelope, faCode, faEye)




const App = () => {
  return (
    <Router>
    
      <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/skills" component={Skills} />
        </Switch>
        <Footer />
    
    </Router>
  );
}

export default App;
