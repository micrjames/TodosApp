import { Response } from "express";   
import path from "path";   
import { utils } from "../../utils.js";
import { sendParams } from "./sendParams.js";

export const send = (res: Response, params: sendParams) => {
   res.status(params.status).render(path.resolve(utils.__dirname, params.view), params.data);
};
