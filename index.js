const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res)=> {
  res.send('Hello World')
})

app.get('/dog', (req, res)=> {
  res.json({'sound':'dog'})
})

app.get('/cat', (req, res)=> {
  res.json({'sound':'cat'})
})

app.get('/sound/:name', (req, res)=>{
  const { name } = req.params
  if (name == 'dog'){
    res.json({'sound': '멍멍'})
  }else if(name == 'cat'){
    res.json(({'sound': '야옹','img':'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}))
  }else{
    res.json({ 'sound':'unknown'})
  }
  console.log(name)
})



app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})