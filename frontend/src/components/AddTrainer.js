import React from 'react'

import NewTrainerForm from './forms/NewTrainerForm'
import { createTrainers } from '../lib/api'

// ? Page that allows user to upload new trainers, upon adding the new item, take user back to Trainers index

class AddTrainer extends React.Component{
  state = {
    trainer:{
      name: '',
      brand: '',
      color: '',
      price: '',
      size: '',
      image: '',
      description: ''
    }
  }

  // * Function to collate new trainers info from input values
  handleChange = e => {
    const {trainer} = this.state
    const newTrainer = {...trainer, [e.target.name]: e.target.value}
    this.setState({trainer: newTrainer})
  }

  // * Function to post new trainers info to API
  handleSubmit = async e => {
    e.preventDefault()
    try{
      const res = await createTrainers(this.state.trainer)
      const newId = res.data._id
      this.props.history.push(`/trainers/${newId}`)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const {trainer} = this.state
    // console.log('I am new', trainer)
    return(
      <NewTrainerForm 
       onChange={this.handleChange} 
       onSubmit={this.handleSubmit}
       {...trainer} 
      />
    )
  }
}

export default AddTrainer