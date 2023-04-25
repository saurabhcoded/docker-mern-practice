const app = require("express")();

app.get("/", (req, res) => {
  res.send("Saurabh Sharma Welcome to Docker Express");
});

app.listen(5000,()=>{
    console.log("New Docker Express is running...")
})