import express from "express";
import payload from "payload";
import cors from "cors";

const app = express();
app.use(cors());

const start = async () => {
  await payload.init({
    secret: "your-secret-key",
    express: app,
  });

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
};

start();
