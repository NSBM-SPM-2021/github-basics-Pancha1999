
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Foodordering from './Pages/Foodordering';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path ="/">
        <Home/>
      </Route>
      <Route path="/menu">
        <Menu/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/foodorder/:price/:name">

        <Foodordering/>
      </Route>
      
    </Switch>
    <Footer/>
     
    </div>
    </Router>
  );
}

export default App;
