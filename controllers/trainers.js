const Trainer = require('../models/trainer')

// * Create the controllers for your resouce here (index, create), (show, update delete optional)

// * GET and show all dinosaurs in collection

async function trainersIndex(req, res) {
  try {
    const trainers = await Trainer.find()
    res.status(200).json(trainers)
  } catch (err){
    res.json(err)
  }
}

// * POST and create a trainer

async function trainersCreate(req, res) {
  try {
    const createdTrainer = await Trainer.create(req.body)
    res.status(201).json(createdTrainer)
  } catch (err) {
    res.json(err)
  }
}

// * GET and show a single trainer

async function trainersShow(req, res) {
  try {
    const trainerId = req.params.id
    const trainer = await Trainer.findById(trainerId)
    if (!trainer) throw new Error()
    res.status(200).json(trainer)
  } catch (err) {
    res.json(404).json({ 'message': 'Not Found' })
  }
}

// * PUT find trainer by ID and edit it 

async function trainersEdit(req, res) {
  try {
    const trainerId = req.params.id
    const trainersEdit = await Trainer.findOneAndUpdate(trainerId, req.body, { new: true, runValidators: true })
    res.json(trainersEdit)

  } catch (err) {
    res.json(err)
  }
}

// * DELETE a single trainer

async function trainersDelete(req, res) {
  try {
    const trainerId = req.params.id
    const deleteTrainer = await Trainer.findByIdAndDelete(trainerId)
    res.status(204).json(`${deleteTrainer} has been deleted`)

  } catch (err) {
    res.json(err)
  }
}

// * Function to post a comment on Trainer
async function trainersCommentPost(req, res) {
  try {
    const trainerId = req.params.id
    const trainer = await Trainer.findById(trainerId)
    if (!trainer) throw new Error()
    trainer.comments.push(req.body)
    await trainer.save()
    res.status(201).json(trainer)
  } catch (err) {
    res.status(404).json({ message: 'Not found' })
  }
}

// * Function to delete a comment
async function trainersCommentDelete(req, res) {
  try {
    req.body.user = req.currentUser
    const trainerId = req.params.id
    const commentId = req.params.commentId
    const trainer = await Trainer.findById(trainerId)
    if (!trainer) throw new Error()
    const commentToRemove = trainer.comments.id(commentId)
    if (!commentToRemove) throw new Error()
    await commentToRemove.remove()
    await trainer.save()
    res.sendStatus(204)
  } catch (err) {
    res.status(404).json({ message: 'Not found' })
  }
}



// * export your controllers for use in the router

module.exports = {
  index: trainersIndex,
  create: trainersCreate,
  show: trainersShow,
  edit: trainersEdit,
  delete: trainersDelete,
  postComment: trainersCommentPost,
  deleteComment: trainersCommentDelete
}