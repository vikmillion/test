import "./App.css";
import Header2 from "./Header/Header2";
import About from "./About";
import Users from "./Users";
import Main from "./Main";
import UserId from "./UserId";
import Error from "./Error";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          <Route
            exact
            path="https://vikmillion.github.io/test/"
            element={<Main />}
          ></Route>
          <Route
            path="https://vikmillion.github.io/about"
            element={<About />}
          ></Route>
          <Route
            exact
            path="https://vikmillion.github.io/users"
            element={<Users />}
          ></Route>
          <Route path="/users/:userName" element={<UserId />}></Route>
          <Route element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
