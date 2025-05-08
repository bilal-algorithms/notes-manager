import fs from "node:fs";
const getNotes = () => JSON.parse(fs.readFileSync("./notes.json", "utf8"));
const saveNotes = (data) => fs.writeFileSync("./notes.json", JSON.stringify(data));
export { getNotes, saveNotes };
