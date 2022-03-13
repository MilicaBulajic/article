const express = require("express");
//instance of express
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

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
