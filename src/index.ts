import express from 'express'
import dataRouter from './routes/data'

const app = express()

app.use(express.json())
const PORT = 3000

app.get('/ping' , (_req , res)=>{
    console.log(('test terminal visual'))
    res.send('prueba')
})

app.use('/api/data' , dataRouter)


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})