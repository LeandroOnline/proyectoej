import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Navbar/>
        </Route>
        
        <Route exact path="/" component={Home} />
        
        <Route exact path="/about" render={ () => <About/> } />
      </Routes>
    </div>
  );
}

export default App;
