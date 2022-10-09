const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ status: 'Congratulations, the server is up and running!' })
})
app.get('/deploy', (req, res) => {
  res.json({ status: 'Your application is deploy to minikube!' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
