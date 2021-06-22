const express = require("express");
const db = require("./db/models");
const coffeRoutes = require("./routes/coffe");

const app = express();

app.use(express.json());
app.use("/coffe", coffeRoutes);
db.sequelize.sync({ alter: true });

app.use((err, req, res, next) => {
  //error #1 on task
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});
app.use((req, res, next) => {
  //not found #2 on task
  res.status(404).json({ message: "Path Not Found" });
});
const PORT = 8000;
app.listen(PORT, () =>
  console.log(`the application runs on localhost:${PORT}`)
);
