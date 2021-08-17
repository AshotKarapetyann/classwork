import routes from "./routes/routes";
import router from "./routes/crudRoutes";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
export const PORT = process.env.PORT || 4000; 

const app = express();

app.use(express.json());
app.use("/", routes);
app.use("/", router);


app.listen(PORT, ()=>{
console.log("===============================================");
console.log(`Server is running on link http://localhost:${PORT}`);
console.log("===============================================");
});