import axios from 'axios'
import { getToken } from './auth'

const trainersUrl = '/api'

const addHeaders = () => {
  return {
    headers: {Authorization: `Bearer ${getToken()}`}
  }
}

// * Function for getting all trainers from API
export const getAllTrainers = () => {
  return axios.get(`${trainersUrl}/trainers`)
}


// * Function for getting a single trainer from API
export const getATrainer = (trainerId) =>{
  return axios.get(`${trainersUrl}/trainers/${trainerId}`)
}

// * Function to edit a trainer and PUT on API
export const editTrainer = (trainerId, trainer) => {
  return axios.put(`${trainersUrl}/trainers/${trainerId}`, trainer, addHeaders())
}

// * Function to delete a single trainer
export const deleteTrainer = (trainerId) => {
  return axios.delete(`${trainersUrl}/trainers/${trainerId}`, addHeaders())
}

// * Function to create new trainers
export const createTrainers = (trainers) => {
  return axios.post(`${trainersUrl}/trainers`, trainers, addHeaders())
}

// * Function to register a new user
export const newUser = (regData) => {
  return axios.post(`${trainersUrl}/register`, regData)
}

// * Function to login user
export const loginUser = (loginData) => {
  return axios.post(`${trainersUrl}/login`, loginData)
}

// * Function to post a comment
export const postComment = (trainersId, comment) => {
  return axios.post(`${trainersUrl}/trainers/${trainersId}/comments`, comment, addHeaders())
}