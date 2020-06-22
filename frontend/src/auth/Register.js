import React from 'react'

import RegisterForm from '../components/forms/RegisterForm'
import { newUser } from '../lib/api'

// ? Sign up page for user 

class Register extends React.Component {
  state = {
    register: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  // * Function for user input in registration forms
  handleChange = e => {
    const register = {...this.state.register, [e.target.name]: e.target.value}
    this.setState({register})
  }

  // * Function to submit newly registered user details to API
  handleSubmit = async e => {
    e.preventDefault()
    const {register} = this.state
    try{
      await newUser(register)
      this.props.history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    const {register} = this.state
    // console.log(register)
    return(
     <RegisterForm 
     {...register}
     onChange={this.handleChange}
     onSubmit={this.handleSubmit}
     />
    )
  }
}

export default Register