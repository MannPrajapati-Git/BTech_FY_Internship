// external files on routes

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Home.html')
})
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/Home.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/About.html')
})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/Contact.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})