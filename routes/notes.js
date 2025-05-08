import express from "express";
import {
  getNote,
  createNote,
  updateNote,
  deleteNote,
  getAllNotes,
} from "../controller/notescontroller.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  if (req.query.id) {
    getNote(req, res, next);
  } else {
    getAllNotes(req, res, next);
  }
});
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
