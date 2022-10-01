import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "pages"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/image", express.static(path.join(__dirname, "img")));
app.get("/", (req, res) => {
  return res.render("index");
});

app.listen(PORT, () => console.log(PORT, "| The server was successfully run."));
