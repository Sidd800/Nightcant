const express=require("express");
const path=require("path");
const app=express();
const port=8000;
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
main().catch(err=> console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
}

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
  });


  const Contact = mongoose.model('Contact', contactSchema);


// ALL EXPRESS RELATED STUFF
app.use('/static',express.static('static'));//FOR SERVING STATIC FILES
app.use(express.urlencoded());


// ALL PUG RELATED STUFF
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

// ENDPOINTS
app.get('/',(req,res)=>{
    const params={};
    res.status(200).render('home.pug',params);
});

app.get('/contact',(req,res)=>{
    const params={};
    res.status(200).render('contact.pug',params);
});


app.post('/contact',(req,res)=>{
    var myData=new Contact(req.body);
    myData.save().then(()=>{
        res.send("THIS ITEM HAS BEEN SAVED")
    }).catch(()=>{
        res.status(400).send("THIS ITEM HAS NOT BEEN SAVED TO DATABASE")
    })
    // res.status(200).render('contact.pug');
});

// STARTIG SERVER
app.listen(port,()=>{
    console.log(`THE APPLICATION STARTED SUCCESSFULLY ON ${port}`);
})