fetch('mongodb://localhost/clock/times')
.then(res => {
  console.log(res.json())})
