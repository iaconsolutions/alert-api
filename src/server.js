const express =  require('express')
const route = require('./route')

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', route)

app.listen(port, () => {
    console.log(`Servidor em execução na porta: http://127.0.0.1:${port}`)
})
