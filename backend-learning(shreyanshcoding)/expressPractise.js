const express = require('express')
const app = express()
const morgan = require('morgan')
const userModel = require('./models/user.js')
const connection = require('./config/db.js')
const { name } = require('ejs')


 app.use(morgan('dev'))  //third-party middleware it will show the time of rendering page and request ,method in console
 app.set("view engine", 'ejs') //to use the ejs file and render it 

//these are build-in middleware in express.js
// Middleware to parse JSON
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public')) //exporting the css file , static file can be accessed without authentication

 //this is a custom middleware
 app.use((req,res,next) =>{
    console.log("this is middleware")
    //logic
    return next()
 })

app.get('/', (req,res,next) =>{
   console.log("this is custom middleware for only homepage")
   return next()
},
 (req,res) =>{
    res.statusCode = 200
  res.render('home')
 })

//creating route
app.get('/about', (req,res)=>{
    res.send("this is about page")
})

app.get('/profile', (req,res)=>{
    res.statusCode = 200   //ok
    res.send("this is profile page")
})

// app.get('/form', (req,res)=>{
//     res.render('index')
// })

// app.post('/get-profile-data', (req,res) =>{
//     console.log(req.body)
//     res.send('data received')
// })


//Register route 
app.get('/register',((req,res)=>{
    res.render('register')
}))

 
// CREATE operation
app.post('/register',async (req,res)=>{ 
    
    const {username,email,password} = req.body

    const newUser =   await userModel.create({
        userName:username,
        email:email,
        password:password
    })

    //res.send("user registered")
    res.send(newUser)
})



//READ OPERATION , will get all user data from database
app.get('/all-user',(req,res)=>{
    userModel.find().then((users)=>{
        res.send(users)
    })
})
//find with some detail
//findOne()
app.get('/all-userr',(req,res)=>{
    userModel.find({
        userName:'a'
    }).then((users)=>{
        res.send(users)
    })
})


//Update operation 
app.get('/user-update', async(req,res)=>{
    await userModel.findOneAndUpdate({
        userName:'misti',
    },{
        email:'mistiwatertype@gmail.com'
    }
)
     res.send("user updated")
})



//Delete opertion
app.get('/delete-user', async(req,res)=>{
   await userModel.findOneAndDelete({
      userName: 'pika',
    })

    res.send("user deleted")
})

app.get('/testing', (req,res)=>{
    res.send("tesing route")
})



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`this server is running on http://localhost: ${PORT}`)
})



