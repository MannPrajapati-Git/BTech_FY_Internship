const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'components', 'Home.html'))
})

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'components', 'Home.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'components', 'About.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'components', 'Contact.html'))
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
