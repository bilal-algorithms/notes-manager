var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Note from "../models/Note.js";
let counter = 3;
export const getNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield Note.findById(req.query.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    }
    catch (error) {
        next(error);
    }
});
export const createNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        yield note.save();
        res.status(201).json(note);
    }
    catch (error) {
        next(error);
    }
});
export const updateNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const note = yield Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    }
    catch (error) {
        next(error);
    }
});
export const deleteNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted" });
    }
    catch (error) {
        next(error);
    }
});
export const getAllNotes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield Note.find({});
        res.status(200).json(notes);
    }
    catch (error) {
        next(error);
    }
});
export const throwTestHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        throw new Error("Test error");
    }
    catch (error) {
        next(error);
    }
});
