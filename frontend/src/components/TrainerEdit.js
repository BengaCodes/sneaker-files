import React from 'react'

import TrainerEditForm from './forms/TrainerEditForm'
import { getATrainer, editTrainer } from '../lib/api'

// ! Page to allow user edit a single trainer

class TrainerEdit extends React.Component{
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


  // * GET trainer data Via Id upon mounting and then set it to state
   async componentDidMount(){
    const trainerId = this.props.match.params.id
    try{
      const res = await getATrainer(trainerId)
      // console.log(res.data)
      this.setState({trainer: res.data})
    } catch (err){
      console.log(err)
    }
   } 

   // * Function to allow user edit form, set State to new value
   handleChange = e => {
     const {trainer} = this.state
    const trainerEdit = {...trainer, [e.target.name]: e.target.value}
    this.setState({trainer: trainerEdit})
   }


   // * Function that submits users changes and saves them
   handleSubmit = async e => {
     e.preventDefault()
    //  console.log(this.state.trainer) New changes showing
    const trainerId = this.props.match.params.id
    // console.log(trainerId)
    try {
      await editTrainer(trainerId, this.state.trainer)
      // console.log(res.data)
      this.props.history.push(`/trainers/${trainerId}`)
    } catch (err) {
      console.log(err)
    }
   }


  render(){
    // console.log(trainer)
    return(
      <TrainerEditForm 
      {...this.state.trainer}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
      />
    )
  }
}

export default TrainerEdit