
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
    <Switch>
      <Route path ="/">
        <Home/>
      </Route>
    </Switch>
    <Footer/>
     </Router>
    </div>
  );
}

export default App;
