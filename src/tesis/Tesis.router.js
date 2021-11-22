import multer from "multer";
import { Router } from "express";
import { getAllThesis, createNewThesis, searchByQuery, uploadPdf } from "./Tesis.controller";

const thesisRouter = Router();

// MULTER
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  const upload = multer({ storage });  

thesisRouter.get("/", getAllThesis);

thesisRouter.post("/", createNewThesis);

thesisRouter.get("/search", searchByQuery);

thesisRouter.post("/upload", upload.single("file"), uploadPdf);

export default thesisRouter;