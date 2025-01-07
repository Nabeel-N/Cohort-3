import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

declare global {
  namespace Express {
    interface Request {
      userId?: string; // Add your custom property here
    }
  }
}

export const userMiddleware = (req: Request,res: Response,  next: NextFunction) => {
  const header = req.headers["authorization"];
  const decoded = jwt.verify(header as string, JWT_PASSWORD);
  if (decoded) {
    //@ts-ignore
    req.userid = decoded.id;
    next();
  } else {
    res.status(403).json({
      message: "you are not logged in",
    });
  }
};
