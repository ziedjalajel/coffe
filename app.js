const express = require("express");
const coffeRoutes = require("./routes/coffe")

const app = express ();

app.use(express.json())

app.use("/coffe",coffeRoutes)

const PORT = 8000;
app.listen(PORT,()=> console.log(`the application runs on localhost:${PORT}`));