import React, { Component } from 'react';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Protected from './pages/Protected';
import logProps from './components/utilities/logProps';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  state = {
    title: 'Welcome to React JDC Training',
    auth: {
      isAuthenticated: false
    }
  };

  login = (username, password) => {
    // TODO: Your login logic here
    this.setState({
      auth: {
        isAuthenticated: true
      }
    });
  };

  logout = () => {
    // TODO: Your logout logic here
    this.setState({
      auth: {
        isAuthenticated: false
      }
    });
  };

  setTitle = title => {
    this.setState({ title });
  };

  onHeaderClick = event => {
    event.preventDefault();
    window.alert('You pressed the header');
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header {...this.state} onHeaderClick={this.onHeaderClick} />
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
            {this.state.auth.isAuthenticated &&
              <Link to="/protected">Protected</Link>}
          </nav>
          <Route
            exact
            path="/"
            render={props =>
              <Home login={this.login} auth={this.state.auth} {...props} />}
          />
          <Route
            path="/about"
            render={props => <About setTitle={this.setTitle} {...props} />}
          />
          <PrivateRoute
            path="/protected"
            auth={this.state.auth}
            render={props =>
              <Protected
                auth={this.state.auth}
                logout={this.logout}
                {...props}
              />}
          />
        </div>
      </Router>
    );
  }
}

export default logProps(App);