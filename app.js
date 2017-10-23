const express = require('express')
const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/clock'
const moment = require('moment')
moment().format()
const app = express()

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
  }
  app.use(express.static('./public'))
  const times = db.collection('times')

  app.get('/clock/times', (req, res) => {
    times
      .find()
      .toArray()
      .then(list => res.json(list))
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
