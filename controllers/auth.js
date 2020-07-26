const User = require('../models/user')
const jwt = require('jsonwebtoken')
const secret = 'min yo bizz'

async function register(req, res){
  try {
    const user = await User.create(req.body)
    res.status(201).json({ message: `Welcome ${user.username}` })
  } catch (err){
    res.status(422).json(err)
  }
}



async function login (req, res) {
  try {
    // * find a user by their email
    const user = await User.findOne({ email: req.body.email })
    // * if they dont exist or password doesnt match throw an error
    if (!user || !user.validatePassword(req.body.password)) {
      throw new Error()
    }
    //* if above passes, make the user a token
    const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '7 days' })
    // * send the usera token in response
    res.status(202).json({
      message: `Sup ${user.username}`, 
      token
    })
  } catch (err){
    res.status(401).json({ message: 'unauthorized' })
  }
}

module.exports = {
  register,
  login
}