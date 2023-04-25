const app = require("express")();

app.get("/", (req, res) => {
  res.send("Saurabh Vivek Welcome to Docker Express");
});

app.listen(5000,()=>{
    console.log("Another New Docker Express is running...")
})