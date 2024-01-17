import { Router } from "express";
import { healthCheck, testController } from "../controllers/test.controller.js";

const router = Router();

router.route("/").get(testController);
router.route("/health").get(healthCheck);

export default router;