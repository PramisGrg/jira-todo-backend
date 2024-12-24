import { Request, Response } from "express";

const notFoundController = async (
  req: Request,
  res: Response
): Promise<any> => {
  return res.status(404).json({
    message: "Sorry, the requested content was not found in the server.",
  });
};

export default notFoundController;
