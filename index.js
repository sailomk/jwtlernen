const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/',(req,res) => {
    res.send(' Self Motivation ')
})
app.get('/me',(req,res) => {
    res.send(' Hi Cool a bit')
})
app.listen(port,() => {
    console.log(`App listening at http://localhost:${port}`)
})
