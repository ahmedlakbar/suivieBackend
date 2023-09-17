const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.router");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
const sequelize = require("../config/sequelize");
const User = require("../models/user.model");

async function syncDB() {
  try {
    await sequelize.sync({ force: true });
    await User.sync({ force: true });
    console.log("Database and tables synchronized.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

syncDB();

*/
