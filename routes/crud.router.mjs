import { Router } from "express";
import bodyParser from "body-parser";
import log from "@ajar/marker";

import * as crud_controller from "../controllers/crud.controller.mjs";

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

router.get("/get-slider-data", async (_, res)=> {
    const data = await crud_controller.getData("slider-data");
    res.status(200).json(data)
});

router.post("/update-slider-data", async (req, res)=> {
    await crud_controller.updateData(req.body.slider_data, "slider-data");
    req.body.slider_data?
    res.status(200).send("slider updated"):
    res.status(500).send("something went wrong")
});

router.get("/get-games-data", async (_, res)=> {
    const data = await crud_controller.getData("games-data");
    res.status(200).json(data)
});

router.post("/update-games-data", async (req, res)=> {
    await crud_controller.updateData(req.body.games_data, "games-data");
    req.body.games_data?
    res.status(200).send("games updated"):
    res.status(500).send("something went wrong")
});

export default router;