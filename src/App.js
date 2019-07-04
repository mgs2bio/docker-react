import React from 'react';
import Users from './users/Users';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Route from 'react-router-dom/Route'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
       
        <Route path="/" exact render = {
          ()=> {
            return  <Users></Users>
          }
        }/>

        <Route path="/about/" exact render ={
          ()=> {
            return <h1>welcome about</h1>
          }
        }/>

        <Route path="/user/:username" exact component = {user_1}
        />
         
      </div>

    </Router>
      
  );
}

const user_1 = ({ match }) => {
    return <h1>welcome user {match.params.username}</h1>
}

export default App;
