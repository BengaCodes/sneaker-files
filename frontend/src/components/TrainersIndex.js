import React from 'react'
import { getAllTrainers } from '../lib/api'

// ! Page showing all the trainers in an array

import TrainerCard from './TrainerCard'

class TrainersIndex extends React.Component{
  state={
    trainers: null
  }



  // * GET all trainers from API and setState to response data
  async componentDidMount(){
    try{
      const res = await getAllTrainers()
      const data = res.data
      // console.log(data)
      this.setState({trainers: data})
    } catch (err) {
      console.log(err)
    }
  }


  // * Map each trainer in trainers array and return Trainer Card for each one.
  render(){
    if(!this.state.trainers) return <h1>Loading...</h1>
    const {trainers} = this.state
    // console.log(trainers)
    return(
      <section className="show-all section">
      <div className="container">
        <div className="columns is-multiline">
          {trainers.map(trainer => 
          <TrainerCard 
          key={trainer._id}
          {...trainer}
          />
          )}
        </div>
      </div>
    </section>
    )
  }
}

export default TrainersIndex