const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/',(req,res) => {
    res.send(' Self Motivation ')
})

app.listen(port,() => {
    console.log(`App listening at http://localhost:${port}`)
})
