const express = require("express");
const router = express.Router();
const yahooStockAPI = require('yahoo-stock-api').default;

const yahoo = new yahooStockAPI();


router.post('/company',async (req,res)=>{
const {cname, ccode} = req.body;

getTracker = async (ccode, res) => {
  
  const data = await yahoo.getSymbol({ symbol: ccode });
  
  return ({value : data.response.bid.value});
};
const data = await getTracker(ccode);
res.send(data);
});

module.exports = router;
