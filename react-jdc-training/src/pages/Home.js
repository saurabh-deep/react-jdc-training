import React from 'react';
import { Redirect } from 'react-router-dom';

export default props => {
  const { profile, login } = props;
  const { from } = props.location.state ? props.location.state : {from: '/'};
  return !profile.isAuthenticated ?
    <div>
      <p className="App-intro">
        <button onClick={login}>Fake Login</button>
      </p>
    </div>
    :
    <Redirect to={from} />
  ;
};