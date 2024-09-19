const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const port = 3000;

app.use(bodyParser.json()); 

const accounts = [
    { id: 1, name: 'Alice',accountBalance:200 },
    { id: 2, name: 'Bob',accountBalance:50 },
    { id: 3, name: 'Charlie',accountBalance:500 },
  ];

app.post('/updateAccount',(req,res)=>{
    const {id,name}=req.body;
    const acc = accounts.find(acc=>acc.id===id);
    if(acc){
        acc.name=name
        res.json({success:true});
    }
})
app.get('/accounts', (req, res) => {
    res.json(accounts);
  });
app.post('/updateBalance',(req,res)=>{
    const {id, accountBalance}=req.body;
    const acc = accounts.find(acc=>acc.id===id)
    if (acc)
    {
        acc.accountBalance+=accountBalance
        res.json({success:true})
    }
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });