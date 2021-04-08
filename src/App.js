import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/content/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import About from './components/content/about/About';
import Contact from './components/content/contact/Contact';

function App() {
  const [header, setHeader] = useState(false);

  const allowSticky = () => {
    if (window.scrollY >= 70) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener('scroll', allowSticky)

  return (
    <div className="App">
      <Router>
        <div className={header ? "header-component-scroll" : "header-component"}>
          <Header />
        </div>
        <Route exact path="/">
          <div className="container-fluid">
            <Home />
          </div>
          <Footer />
        </Route>
        <div className="container-fluid">
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
