import './App.css';
import Home from './componants/Home/Home';
import Friends from './componants/Friends/Friends';
import About from './componants/About/About';
import Error from './componants/Error/Error';
import { BrowserRouter as Router, Switch, Route, Link as NavLink } from 'react-router-dom';
import Posts from './componants/Posts/Posts';
import PostDetail from './PostDetail/PostDetail';

function App() {
  const btnstyle = {
    fontWeight: "bold",
    color: "red"
  }
  return (
    <div className="App">
      <Router>
        <NavLink to="/home" activeStyle={btnstyle} activeClassName="selected"> Home </NavLink>
        <NavLink to="/friends"> Friends </NavLink>
        <NavLink to="/posts"> Posts </NavLink>
        <NavLink to="/about"> About </NavLink>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/posts">
            <Posts></Posts>
          </Route>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <Error></Error>
          </Route>
        </Switch></Router>
    </div>
  );
}

export default App;
