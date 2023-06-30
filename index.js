import  express  from 'express'


const app = express()

app.listen(3001, ()=> console.log('API running on port 3001'))

app.get('/', (req,res)=> res.json('This is a deployed API'))