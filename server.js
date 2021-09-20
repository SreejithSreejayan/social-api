const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");

require("dotenv/config");
const PORT = process.env.PORT || 8800;

// Connecting to Database
mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("connected to mongoDB"));
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
app.use(morgan("common"));
app.use(express.json());
app.use(helmet());

app.use('/api/auth',authRoute);
app.use('/api/users',usersRoute);
app.use('/api/posts',postsRoute);

app.listen(5000, () => {
  console.log("Social server starting...");
});
