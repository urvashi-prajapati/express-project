// import express fremwork

const express =require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 8586;


//Middle wares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))


// port declare
        app.listen(port,(err)=>{
            if(err) throw err;
            console.log(`server is running on http://localhost:${port}`);
        })


// craete get apis using rest -> get(path,callaback)
        app.get('/',(req,res)=>{
            // res.send("hello world")
            // res.json({'name':'Urvashi Prajapati'});
            res.sendFile(__dirname+'/index.html')
        });

        app.get('/cont',(req,res)=>{
            res.sendFile(__dirname+'/contact.html')
        });
         
        app.get('/abt',(req,res)=>{
            res.sendFile(__dirname+'/about.html')
        });
        
        app.get('/shop',(req,res)=>{
            res.sendFile(__dirname+'/shop.html')
        });



        //admin key = 7809u9nk
        app.get('/admin/log/in/:key',(req,res)=>{
            const key = req.params.key;
            // res.send(key);
            if(key == "7809u9nk" ){
                res.send('welcome admin')
            }
            else{
                // res.send('invalid key')
                res.redirect('/')
            }

        })


        // POST API -> to get data from front end form
            app.post('/contact' ,(req,res)=>{
                var uname = req.body.uname;
                var email = req.body.email;
                var msg = req.body.msg;

                res.send(uname+email+msg);
            })



        app.all('*',(req,res)=>{
            res.status(404).send('<h1>OPPS PAGE NOT FOUND</h1>')
        });


        







// 1) dowmload pacakge => npm i express 
//                 => npm i nodemon - for automatic server start
//                 => npm i body-parser - for parsing json data
// 2) Make the Script in package.jason :- "uv":"nodemon server.js"
//                                         -> npm run uv
// app.all -> for 404 error
//          syntax:-app.all('*', (req, res) => {
//                  res.status(404).send('error')}
// request get and response send
// Express is a web application framework for Node.js, designed for building web applications and APIs.
// Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code on the server side.