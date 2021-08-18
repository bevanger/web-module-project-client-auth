import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="header">
        <h1>Say Hi To Your Friends</h1>
      <Link to='/login'>Login</Link>
      {localStorage.getItem("token") &&
      <Link to='/protected'>Friends</Link>}
       {localStorage.getItem("token") &&
      <Link to='/addFriend'>Add Friends</Link>}
      </div>
     <Switch>
      <PrivateRoute exact path ="/protected" component={FriendsList}/>
      <PrivateRoute path ="/addFriend" component={AddFriend}/>
      <Route path="/" component={Login}/>
      <Route path="/login" component={Login}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
