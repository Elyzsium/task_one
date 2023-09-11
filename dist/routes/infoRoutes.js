"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const infoController_1 = require("../controllers/infoController");
const router = (0, express_1.Router)();
router.get('/api', infoController_1.getInfo);
exports.default = router;
