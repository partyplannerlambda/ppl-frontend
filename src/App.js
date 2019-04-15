import React from 'react';
import {Route} from 'react-router-dom';

import PrivateRoute from './components/PrivateRouter'

import Login from './views/Login'
import MainView from './views/MainView.js'

export default function(props){
  return (
    <div className="App">
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Login} register={true}/>
      <Route exact path="/" component={MainView} />
    </div>
  );
}
