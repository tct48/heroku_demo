const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/",(req, res)=>{
    res.json({reslt:"ok", data:[1,2,3,4,5]})
});

app.listen(PORT, ()=>{
    console.log(`Server is running.${PORT}`);
})