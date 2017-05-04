import React { Component } from 'react';
import './stylesheets/App.css';
import {browserHistory} from 'react-router';
import $ from 'jquery';
import userStore from './stores/UserStore';
import actions from './actions/Actions';

class App extends Component {
  constructor(){
    super()
    this.state = {
      current_user: userStore.getState()
    }
    this.logout = this.logout.bind(this)
  }

  logout(){
    $.ajax({
      method: "DELETE",
      url: "http://localhost:3001/users/sign_out.json"
    })
    .done(() => {
      actions.logoutUser()
      browserHistory.push('/sign_in')
    })
  }

  componentWillMount(){
    if (!userStore.getState()){
      browserHistory.push('/sign_in')
    }
  }

  render(){
    return(
      <h1>Welcome to Pub Golf!</h1>
    )
  }
}

export default App;
