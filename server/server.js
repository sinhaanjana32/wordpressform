const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const { Info } = require("./models/Info");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 'mongodb+srv://wordpressadmin:wordpressadmin@cluster0.6ssoj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB connected"))
.catch(err => console.error(err));



app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());




app.post("/api/uploadInfo", (req, res) => {
  console.log(req.body)
      //save all the data we got from the client into the DB 
      const info = new Info(req.body)
      console.log(info)
  
      info.save((err) => {
          if (err) return res.status(400).json({ success: false, err })
          return res.status(200).json({ success: true })
      })
  
  });
  
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/*', (req, res) => {
 res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

  

  if (process.env.NODE_ENV === "production") {

    // Set static folder
  
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    // index.html for all page routes
    app.get("/*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }




const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});