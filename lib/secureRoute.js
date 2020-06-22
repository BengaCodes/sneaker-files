const jwt = require('jsonwebtoken') // * to decode token
const secret = 'min yo bizz' // * secret that goes with token
const User = require('../models/user') // * user model used to find using accessing token

async function secureRoute(req, res, next){
  try {
    if (!req.headers.authorization) throw new Error() // * if they didnt provide correct headers, no access

    const token = req.headers.authorization.replace('Bearer ', '') // * if correct header, get the value

    const payload = await jwt.verify(token, secret) // * attempt to decode the token

    const user = await User.findById(payload.sub) // * find the user by their Id

    if (!user) throw new Error()

    req.currentUser = user

    next()
  } catch (err){
    res.status(401).json({ message: 'unauthorized' })
  }
}

module.exports = secureRoute