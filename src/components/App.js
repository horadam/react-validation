import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import base from '../styles/base.css'
import ProfileForm from './ProfileForm'
import ThankYou from './ThankYou'


const App = (props) => (
  <Router>
    <div id="container">
      <Route exact path="/" component={ProfileForm}/>
      <Route path="/thanks" component={ThankYou}/>
    </div>
  </Router>
)

export default App;
