// server/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(require('./routes/auth'))

if(process.env.NODE_ENV=='production'){
  const path=require('path')
  app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'Frontend','build')))
    res.sendFile(path.resolve(__dirname,'Frontend','build','index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

