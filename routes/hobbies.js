var express = require('express')
var router = express.Router()
var Hobby = require('../models').Hobby
router.get('/', function(req, res) {
  //SELECT * FROM movies
  Hobby.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
    .then( function(hobbies) {
      return res.render('hobbies', { hobbies: hobbies })
    })
})

// PUT /movies/:id
router.put('/:id', function(req, res) {
  Hobby.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/hobbies')
  })
})

// GET /movies/:id/edit
router.get('/:id/edit', function(req, res) {
  Hobby.findById(req.params.id)
    .then( function(Hobby) {
      return res.render('edit', { hobby: hobby })
    })
})

// DELETE /movies/:id
router.delete('/:id', function(req, res) {
  // SELECT * FROM movies WHERE id = 1 LIMIT 1
  Hobby.findById(req.params.id)
    .then( function(hobby) {
      // DELETE FROM movies WHERE id = 1
      hobby.destroy()
    })
    .then( function() {
      return res.redirect('/hobbies')
    })
})

// POST /movies
router.post('/', function(req, res) {
  //<input name="title" />
  var title = req.body.title
  //INSERT INTO movies (title,description)
  //VALUES("Some Movie", "Some Description")
  Hobby.create({ title: title})
    .then( function() {
      res.redirect('/hobbies')
    })
  

})

module.exports = router
