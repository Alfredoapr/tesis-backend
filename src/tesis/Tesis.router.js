import multer from "multer";
import { Router } from "express";
import {
  getAllThesis,
  createNewThesis,
  searchByQuery,
  uploadPdf,
} from "./Tesis.controller";

const thesisRouter = Router();

// MULTER
const storage = multer.memoryStorage();
const uploadSingle = multer({ storage }).single("file");

thesisRouter.get("/", getAllThesis);

thesisRouter.post("/", createNewThesis);

thesisRouter.get("/search", searchByQuery);

thesisRouter.post("/upload", uploadSingle, uploadPdf);

export default thesisRouter;
