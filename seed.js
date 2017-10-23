const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost/clock', (err, db) => {
  if (err) {
    console.error(err)
  }
  const times = db.collection('times')
  times
    .deleteMany({})
    .then(() => times.insertMany([
      {
        location: 'America/Los_Angeles',
        timezone: 'PDT'
      },
      {
        location: 'Asia/Pyongyang',
        timezone: 'KST'
      },
      {
        location: 'America/New_York',
        timezone: 'EDT'
      },
      {
        location: 'Europe/London',
        timezone: 'BST'
      },
      {
        location: 'Europe/Stockholm',
        timezone: 'CEST'
      },
      {
        location: 'Australia/Sydney',
        timezone: 'AEDT'
      },
      {
        location: 'America/Sao_Paulo',
        timezone: '-02'
      },
      {
        location: 'Pacific/Honolulu',
        timezone: 'HST'
      },
      {
        location: 'Europe/Moscow',
        timezone: 'MSK'
      }
    ]))
    .catch(err => {
      console.error(err)
      process.exit(1)
    }).then(() => console.log('Times seeded.'))
    .then(() => db.close())
})
