const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const cors = require('cors')
const userRouter =require("./routes/users")
const favoriteRouter =require("./routes/favorite")

// Middlewares
app.use(express.json())
app.use(cors())
app.use("/books",router)
app.use("/auth",userRouter)
app.use("/user",favoriteRouter)



mongoose
  .connect(
    "mongodb+srv://reactodo:reactodo@cluster0.9me7ngm.mongodb.net/legacy?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
  })
  .then(() => {app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
  }).catch((err)=>{
    console.log(err)
  })

