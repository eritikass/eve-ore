import React, {
  Component,
} from "react";
import {
  Route, 
  Link,
} from "react-router-dom";
// import {
//   connect,
// } from 'react-redux';
// import logo from "./logo.svg";
import "./App.css";
import Ore from './Ore';

const Home = props => <h1>Home</h1>;
const About = props => <h1>About</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">HOME</Link> ::
        <Link to="/about">ABOUT</Link> ::
        <Link to="/ore/112b57c4">Ore</Link> ::
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/ore/:hash" component={Ore} />
      </div>
    );
  }
}

export default App;

// const mapStateToProps = (state) => {
// 	return { message: state }
// }

// const ConnectedApp = connect(mapStateToProps)(App);

// export default ConnectedApp;
