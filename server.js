const express=require("express");
const app=express();
const fs=require("fs");
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("short",{shortURL:""});
})

app.post("/short",(req,res)=>{
    fs.readFile(__dirname+"/URL.json",(err,data)=>{
       if(err){
        console.log(err);
       }
       else{
           let URL;
        if(data==""){
            URL=[];
        }
        else{
            URL=JSON.parse(data)
        }
        let shortURL='localhost:3000/'+Math.floor(Math.random()*100000);
        URL.push({original:req.body.url,short:shortURL});
        fs.writeFile(__dirname+"/URL.json",JSON.stringify(URL),(err)=>{
            if(err){
                console.log(err);
            }
            else{
                res.render("short",{shortURL:shortURL});
            }
        })
       }
    })
})

app.get("/:id",(req,res)=>{
    fs.readFile(__dirname+"/URL.json",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            let URL;
            if(data==""){
                URL=[];
            }
            else{
                URL=JSON.parse(data);
            }
            URL=URL.filter((data)=>{
                let targetid=data.short.split("/")[1];
                return req.params.id==targetid;
            })
            if(URL.length>0){
                res.redirect(URL[0].original);
            }
            else{
                res.send("No URL found!");
            }
        }
    })
})
app.listen(3000,()=>{
    console.log("Server Started!");
})