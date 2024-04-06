const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

const sessionsRoutes = Router();
notesRoutes.post("/", sessionsController.create);

module.exports = sessionsRoutes;