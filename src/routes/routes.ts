import express from "express";
import controllers from "../controllers/controllers";

const router = express.Router();

router.get("/read", controllers.read);
router.get("/write", controllers.write);

export default router;