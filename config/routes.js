// * Create your router here
const router = require('express').Router()
const trainers = require('../controllers/trainers')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/trainers')
  .get(trainers.index)
  .post(secureRoute, trainers.create)

// ! Add back secureRoute to .put
router.route('/trainers/:id')
  .get(trainers.show)
  .put(secureRoute, trainers.edit)
  .delete(secureRoute, trainers.delete)

router.route('/trainers/:id/comments')
  .post(trainers.postComment)

router.route('/trainers/:id/comments/:commentId')
  .delete(trainers.deleteComment)

router.route('/register')
  .post(auth.register)

router.route('/login') 
  .post(auth.login)


// * Export your router! you will need to register this as middleware in "index.js" !
module.exports = router