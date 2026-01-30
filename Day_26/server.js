const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Middleware : It is required for css img etc 
app.use(express.static('public'))


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


app.get('/addprocess', (req, res) => {
    var num1 = req.query.num1
    var num2 = req.query.num2
    var sum = parseInt(num1) + parseInt(num2)
   
    res.send("<h1>Number 1 : "+num1+"<br/>  Number 2 : "+num2+"<br/>Sum of " + num1 + " and " + num2 + " is " + sum + "</h1>")
})

// searching and sorting
// query string
// http://localhost:3000/search?s=Mann
// http://localhost:3000/search?s=Mann&s=Heli

app.get('/search',(req,res)=>{
    var mysearch = req.query.s
    res.send("<h1>You Search : "+ mysearch+"</h1>")

})


// for navigation
// params
app.get('/data/:id',(req,res)=>{
    var mydata = req.params.id
    res.send("<h1>The data is : "+ mydata+"</h1>")
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

