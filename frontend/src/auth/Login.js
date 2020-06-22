import React from 'react'

// ? User login page

import LoginForm from '../components/forms/LoginForm'
import { loginUser } from '../lib/api'
import { setToken } from '../lib/auth'

class Login extends React.Component {
  state = {
    loginData: {
      email: '',
      password: ''
    }
  }

  // * Function to collate login input from user
  handleChange = e => {
    const loginData = {...this.state.loginData, [e.target.name]: e.target.value}
    this.setState({loginData})
  }

  // * Function to submit user details to API for validation
  handleSubmit = async e => {
    e.preventDefault()
    // console.log('I am logged in')
    const {loginData} = this.state
    try{
      const res = await loginUser(loginData)
      // console.log(res.data.token)
      setToken(res.data.token)
      this.props.history.push('/trainers')
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    const {loginData} = this.state
    // console.log(loginData)
    return(
      <LoginForm 
      {...loginData}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
      />
    )
  }
}

export default Login