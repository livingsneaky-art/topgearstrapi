import express from "express";
import payload from "payload";
import cors from "cors";

const app = express();

// Configure CORS
app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? ["https://topgear.onrender.com"]
    : ["http://localhost:3000"],
  credentials: true,
}));

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET || "default-secret-key",
  mongoURL: process.env.DATABASE_URI || "mongodb://localhost/topgear",
  express: app,
});

app.listen(process.env.PORT || 3001);
