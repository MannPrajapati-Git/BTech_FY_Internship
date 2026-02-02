const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// view engine setup

app.set('views',__dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/form', (req, res) => {
    res.render('calc')
})

app.post('/calcprocess', (req,res)=>{
    var num1 = req.body.num1
    var num2 = req.body.num2
    var sum = parseInt(num1) + parseInt(num2)
    res.render('result',{mynum1:num1,mynum2:num2,mysum:sum})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
