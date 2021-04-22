const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use(cors({origin:"*"}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;
// app.use(bodyParser).json

app.listen(PORT, ()=>{
    console.log(`Server is running.${PORT}`);
})

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null,'uploads')
    },
    filename:(req, file, callback)=>{
        callback(null, `FunOfHeuristic_${file.originalname}`)
    }
})

var upload = multer({ storage: storage });

app.get("/",(req, res)=>{
    res.json({reslt:"ok", data:[1,2,3,4,5]})
});

app.post('/file', upload.single('jane'), (req, res, next)=>{
    const file = req.file;
    console.log(file.filename);
    if(!file){
        const error = new Error('No File');
        error.httpStatusCode = 400
        return next(error);
    }
    res.send(file);
})

