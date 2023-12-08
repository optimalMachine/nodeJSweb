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
    res.json(({'sound': '야옹'}))
  }else{
    res.json({ 'sound':'unknown'})
  }
  console.log(name)
})



app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})