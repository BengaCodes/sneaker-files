import React from 'react'
import { getATrainer, deleteTrainer } from '../lib/api'
import ShowATrainer from './ShowATrainer'


// ! Page Showing each individual trainer

class TrainerShow extends React.Component{
  state = {
    trainer: null
  }


  // * GET each trainer clicked on trainersIndex by ID and set the data to state
  async componentDidMount(){
    try{ 
        const trainerId = this.props.match.params.id
        const res = await getATrainer(trainerId)
        const data = res.data
        // console.log(data)
        this.setState({trainer: data})
    } catch (err){
      console.log(err)
    }
  }

  handleDelete = async () =>{
   try {
    const trainerId = this.props.match.params.id
    await deleteTrainer(trainerId)
    this.props.history.push('/trainers')
   } catch (err){
     console.log(err)
   }
  }


  render() {
    const {trainer} = this.state
    // console.log(trainer)
    if (!trainer) return <h1>Loading...</h1>
    return(
      <ShowATrainer 
      {...trainer}
      onClick={this.handleDelete}
      />
    )
  }
}

export default TrainerShow