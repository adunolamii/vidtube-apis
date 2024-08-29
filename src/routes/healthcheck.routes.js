import { Router } from "express";
import { healthcheck}  from "../controllers/healthcheckControlers.js";


 const router = Router()

router.route("/").get (healthcheck)

// router.route("/").get( upload.single ("avatar"))
router.route("/test").get (healthcheck)

export default router

