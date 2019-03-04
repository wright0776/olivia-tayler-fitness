import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        username: '',
        password: ''
      },
      errors: {
        noUsername: false,
        noPassword: false,
        invalidCredentials: false
      }
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
  }

  render() {
    const {username, password} = this.state;
    return (
      <div className='loginComponent'>
        <form className='loginForm'>
          <span className='loginTitle'>Sign In</span>
          <div className='loginInputs'>
            <input placeholder='Username' onChange={this.handleChange} name='username' value={username}/>
            <input placeholder='Password' onChange={this.handleChange} name='password' value={password}/>
          </div>
          <button className='signInButton' onClick={this.handleSubmit}>SIGN IN</button>
        </form>

      </div>
    )
  }
}
