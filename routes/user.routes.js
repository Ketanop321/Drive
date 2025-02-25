const express = require('express')
const router = express.Router()

 router.get('/index',(req,res)=>{
    res.render('index')
 })

router.get('/register', (req,res)=>{
    res.render('register')
})

router.get('/login',(req,res)=>{
    res.render('login')
})


router.post('/register',(req,res)=>{
    console.log(req.body)
    res.send('user registered')
})

module.exports = router;