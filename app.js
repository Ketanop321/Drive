const express = require('express')
const app = express()
const userRouter = require('./routes/user.routes')


app.set('view engine', 'ejs')

app.get('/' , (req,res) =>{
    res.render('index')
})

app.use('/user', userRouter)


 app.listen(3000, () =>{
    console.log('server listening at port 3000')
})