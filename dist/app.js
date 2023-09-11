"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const infoRoutes_1 = __importDefault(require("./routes/infoRoutes"));
const app = (0, express_1.default)();
const port = 8080; // Choose your desired port
// Middleware for parsing JSON requests
app.use(express_1.default.json());
// Routes
app.use('/', infoRoutes_1.default);
app.listen(port, () => {
    console.log(`profile details api is running at http://localhost:${port}/api?slack_name=elysium&track=backend`);
});
exports.default = app;
