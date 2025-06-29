import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.json());
// Routes
app.get('/', (req, res) => {
  res.send('✅ Hello World from Express with ES Modules!');
});


app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    // "mongodb+srv://admin:ESjtvUtwLfVb8c2F@cluster0.tdimc.mongodb.net/Blog?retryWrites=true&w=majority"
    "mongodb+srv://admin:PugWpoVOJWxpPWnB@cluster0.empw8we.mongodb.net/Blog2?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
