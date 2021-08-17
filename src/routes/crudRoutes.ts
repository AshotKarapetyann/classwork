import express from "express";
import controllers from "../controllers/crudControllers";

const router = express.Router();

router.get("/", controllers.getUsers);
router.post("/", controllers.addUser);
router.put("/", controllers.updateUser);
router.delete('/:id', controllers.deleteUser);

export default router;