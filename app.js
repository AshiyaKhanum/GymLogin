const express = require("express")
const fs=require("fs")
const path = require("path");
const app = express();
const port = 80;
 
//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug') //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

 //ENDPOINTS
app.get('/',(req,res)=>{
    const con="This is the best content on the internet so far so use it wisely"
    const params={'title':'PubG is the best game','content':con}
    res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more

    let outputToWrite =`The name of the client is ${name},${age} years old,${gender},residing at ${address}, More about him/her:${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'message':'Your form has been submitted successfully',}
    res.status(200).render('index.pug',params);

})

// // Our pug demo endpoint
// app.get("/demo", (req, res)=>{ 
//     res.status(200).render('demo', { title: 'Hey Ashiya', message: 'Hello there and thanks for telling me how to use pubG!' })
// });

// app.get("/", (req, res)=>{ 
//     res.status(200).send("This is homepage of my first express app with Harry");
// });

// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first express app with Harry");
// });

// app.post("/about", (req, res)=>{
//     res.send("This is a post request about page of my first express app with Harry");
// });
// app.get("/this", (req, res)=>{
//     res.status(404).send("This page is not found on my website cwh");
// });

//Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});