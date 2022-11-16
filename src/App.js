import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar/Navbar';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      {/* <Route path="/" element={<Navbar />} /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element= {<About info="...Info de About..."/>}/>
        <Route exact path="/users" element= {<Users info="...Info de USUARIOS..."/>}/>
      </Routes>

    </div>
  );
}

export default App;
