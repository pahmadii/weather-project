const express=require("express");
const axios=require("axios");
require("dotenv").config();

const app=express();

app.set("view engine","ejs");
app.use(express.static("public"));
 const API_KEY=process.env.API_KEY;

app.get('/',(req,res)=>{
res.render('index',{weather:null,error:null});
});

app.get('/weather',async(req,res)=>{
const city=req.query.city;
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
 let weather;
 let error=null;

 try{
    const response=await axios.get(url);
    weather=response.data;

 }catch(error){
weather=null;
error="errrrrrrrrr"
 };
res.render('index',{weather,error});
});

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
    
});
