import { Request, Response, NextFunction } from 'express';

export const getInfo = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const elysium = req.query.slack_name as string;
        const backend = req.query.track as string;

        const daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay: string = daysOfWeek[new Date().getUTCDay()];

        const now: Date = new Date();
        const utcTime: string = now.toISOString();

        const github_file_url: string = "https://github.com/Elyzsium/task_one/tree/main";
        const github_repo_url: string = "https://github.com/Elyzsium/task_one.git";

        const response_data = {
            "slack_name": elysium,
            "current_day": currentDay,
            "utc_time": utcTime,
            "track":backend,
            "github_file_url": github_file_url,
            "github_repo_url": github_repo_url,
            "status_code": 200
        };

        res.json(response_data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", status_code: 500 });
    }
};
