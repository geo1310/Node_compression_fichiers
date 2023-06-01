const express = require("express");
const multer = require("multer");

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.static("./uploads"));

app.get("/", (req, res) => {
 return res.json({ message: "Hello world 🔥🇵🇹" });
});

app.post("/", upload.single("picture"), async (req, res) => {
    fs.access("./uploads", (error) => {
      if (error) {
        fs.mkdirSync("./uploads");
      }
    });
    // Even more logic goes here.
   });
   

app.listen(3000);
