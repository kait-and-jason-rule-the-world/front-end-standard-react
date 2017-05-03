import React, { Component } from 'react';
import axios from 'axios';

class SignupForm extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }// end of state
  }// end of constructor

  handleEmailInput(e){
    this.setState({
      email: e.target.value
    }); //end of setState
  }; //end of handleEmailInput

  handlePasswordInput(e){
    this.setState({
      password: e.target.value
    })//end of setState
  }//end of handlePasswordInput

  handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:3000/users/sign_in.json', {
      email: this.state.email,
      password: this.state.password
    })
  }


} //end of class

export default SignupForm;
