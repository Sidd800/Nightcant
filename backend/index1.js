const express=require('express');
const app=express();
const path=require('path');
const port=80;

// ALL EXPRESS RELATED STUFF
// app.use('/static',express.static('static'));// FOR SERVING STATIC FILES


// ALL PUG RELATED STUFF
// app.set('view engine','pug'); // SET TEMPLATE ENGINE AS PUG
// app.set('views',path.join(__dirname,'views')); // SET THE VIEWS DIRECTORY

// OUR PUG DEMO ENDPOINT


// ENDPOINTS
app.get('/',(req,res)=>{
    res.status(200).render('index.pug')
})

app.listen(port,()=>{
    console.log(`THE APPLICATION STARTED SUCCESSFULLY ON PORT ${port}`);
});