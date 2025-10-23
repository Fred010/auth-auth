import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import userAuthRoutes from "./routes/userAuth.js";
import adminAuthRoutes from "./routes/adminAuth.js";
import companyAuthRoutes from "./routes/companyAuth.js";

dotenv.config();

const app = express();

// middleware for parsing JSON and CORS
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Auth Service is running");
});

// use routes
app.use("/api/user", userAuthRoutes);
app.use("/api/admin", adminAuthRoutes);
app.use("/api/company", companyAuthRoutes);

// connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
