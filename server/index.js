const express = require("express");
//instance of express
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers
const articleRouter = require("./routes/articles");
app.use("/articles", articleRouter);

// Sync sequelize models then start Express app
// =============================================
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("\n*************************************");
    console.log(`${process.env.DB_DATABASE} database connected`);
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
      console.log("*************************************\n");
    });
  });
