const express = require('express')
const cors = require('cors')
const foods = require('./foods.json');
const app = express()
const port =process.env.PORT|| 3000


app.use(cors())

app.use(express.json())



app.get('/', (req, res) => {
  res.send('server running!')
})

app.get('/foods',(req,res)=>{
    res.json(foods)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})