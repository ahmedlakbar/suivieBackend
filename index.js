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
