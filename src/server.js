require("dotenv/config");
require("express-async-errors");
const uploadConfig = require('./configs/upload');
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

migrationsRun();

app.use(( err, request, response, next ) => {
  if(error instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      massege:err.message
    });

    console.error(err);

    return response.status(500).json({
      status: "error",
      massege: "Internal server error"
    });
  }
});



const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));