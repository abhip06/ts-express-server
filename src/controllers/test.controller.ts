import { Request, Response } from "express"

export const testController = (req: Request, res: Response) => {
    res.status(200)
    .json({
        status: "ok",
        success: true,
        message: "Test Controller is working fine"
    });
};

export const healthCheck = (req: Request, res: Response) => {
    res.status(200)
    .json({
        status: "ok",
        success: true,
        message: "Your Server is Healthy and working fine."
    });
};
