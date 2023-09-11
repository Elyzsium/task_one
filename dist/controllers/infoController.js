"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = void 0;
const getInfo = (req, res, next) => {
    try {
        const elysium = req.query.slack_name;
        const backend = req.query.track;
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = daysOfWeek[new Date().getUTCDay()];
        const now = new Date();
        const utcTime = now.toISOString();
        const github_file_url = "";
        const github_repo_url = "https://github.com/Elyzsium/task_one.git";
        const response_data = {
            "slack_name": elysium,
            "current_day": currentDay,
            "utc_time": utcTime,
            "track": backend,
            "github_file_url": github_file_url,
            "github_repo_url": github_repo_url,
            "status_code": 200
        };
        res.json(response_data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", status_code: 500 });
    }
};
exports.getInfo = getInfo;
