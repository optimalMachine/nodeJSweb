const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=> {
  res.send('Hello World')
})

app.get('/dog', (req, res)=> {
  res.send('dog')
})

app.get('/user/:id',(req,res)=>{
  const p = req.params
  console.log(p)
  const q = req.query
  console.log(p)  
  res.json({'userID':p.id})
})

app.get('/cat', (req, res)=> {
  res.send('cat')
})

app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})