require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})
app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1><form><input type="text" placeholder="Username"><br><input type="password" placeholder="Password"><br><button type="submit">Login</button></form>')
})

app.get('/youtube', (req, res) => {
  res.send('<h1>Chai aur Code </h1><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
