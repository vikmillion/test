import "./App.css";
import Header2 from "./Header/Header2";
import About from "./About";
import Users from "./Users";
import Main from "./Main";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header2></Header2>
      <Router>
        {/* <nav>
          <li> <Link to="/">Main</Link> </li>
          <li>  <Link to="/about">About</Link> </li>
          <li><Link to="/users">Users</Link> </li>
        </nav> */}
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
