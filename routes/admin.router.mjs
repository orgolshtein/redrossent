import { Router } from "express";
import bodyParser from "body-parser";

import * as admin_controller from "../controllers/admin.controller.mjs"

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

router.post("/admin-login", async (req, res) => {
    const loginSuccess = await admin_controller.adminLogin({
        username: req.body.username,
        password: req.body.password
    });
    loginSuccess ?
    res.status(200).send({name: loginSuccess.name}):
    res.status(500).send(loginSuccess)
});

export default router;