import express from 'express'

const app=express()

let port = 3000

let id=1;
let tea=[]

//tea leliya
app.post('/teas',(req,res)=>{
    const {name,price}=req.body;
    const newtea={id:id++,name,price};
    tea.push(newtea);
    res.status(200).send(newtea);
})
//render data
app.get('/teas',(req,res)=>{
  res.status(200).send(tea);

})





app.listen(port ,()=>{
    console.log("iam listning move on.........")
})