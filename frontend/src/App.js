import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Navbar from './common/Navbar'
import Home from './common/Home'
import SecureRoute from './common/SecureRoute'
import Register from './auth/Register'
import Login from './auth/Login'
import TrainersIndex from './components/TrainersIndex'
import TrainerShow from './components/TrainerShow'
import TrainerEdit from './components/TrainerEdit'
import AddTrainer from './components/AddTrainer'
import TrainerComments from './components/TrainerComments'

const App = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <SecureRoute path="/trainers/:id/comments" component={TrainerComments} />
        <SecureRoute path="/trainers/:id/edit" component={TrainerEdit} />
        <SecureRoute path="/trainers/new" component={AddTrainer} />
        <Route path="/trainers/:id" component={TrainerShow} />
        <Route path="/trainers" component={TrainersIndex} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
