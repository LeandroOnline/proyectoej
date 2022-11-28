import './App.css';
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import NewUsersDetail from './components/NewUsersDetail';


function App() {
  return (
    <div className="App">
      {/* <Route path="/" element={<Navbar />} /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element= {<About info="...Info de About..."/>}/>
        <Route exact path="/users" element= {<Users info="...Info de USUARIOS..."/>}/>
        <Route path="/userdetail/:id" element={ <UserDetail /> }/>
        <Route path="/newusersdetail/:pepito" element={ <NewUsersDetail /> }/>
      </Routes>
     

    </div>
  );
}

export default App;
