const express = require('express')
const router = express.Router()

 

router.get('/register', (req,res)=>{
    res.send('register')
})


module.exports = router;