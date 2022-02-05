import "./App.css";
import Header2 from "./Header/Header2";
import About from "./About";
import Users from "./Users";
import Main from "./Main";
import UserId from "./UserId";
import Error from "./Error";

import { Link, HashRouter as Router, Routes, Route } from 'react-router-dom';



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
        <Router>
          <Link to="/"></Link>
          <Link to="/about"></Link>
          <Link to="/users"></Link>
          <Link to="users/:userName"></Link>
          <Route exact path="/" component={<Main />}></Route>
          <Route path="/about" component={<About />}></Route>
          <Route exact path="/users" component={<Users />}></Route>
          <Route path="/users/:userName" component={<UserId />}></Route>
          <Route element={<Error />}></Route>
        </Router>
        {/* <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route path="/users/:userName" element={<UserId />}></Route>
          <Route element={<Error />}></Route>
        </Routes> */}
        {/* <Routes>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            element={<Main />}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/about"}
            element={<About />}
          ></Route>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/users"}
            element={<Users />}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/users/:userName"}
            element={<UserId />}
          ></Route>
          <Route element={<Error />}></Route>
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
