import React from 'react'

// ? Page allows user to add a comment to trainers

import CommentForm from './forms/CommentForm'
import { postComment } from '../lib/api'

class TrainerComments extends React.Component {
  state = {
    comment: {
      text: ''
    }
  }


  // * Function to handle input of comments into comments text area
  handleChange = e => {
    const comment = {...this.state.comment, [e.target.name]: e.target.value }
    this.setState({comment})
  }

  // * Function to handle posting of trainers comments
  handleSubmit = async e => {
    e.preventDefault()
    const trainerId = this.props.match.params.id
    try{
      await postComment(trainerId, this.state.comment)
      console.log(trainerId)
      this.props.history.push(`/trainers/${trainerId}`)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const {comment} = this.state
    console.log('Here is comment:',comment)
    return(
      <CommentForm 
      {...comment}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
      />
    )
  }
}

export default TrainerComments