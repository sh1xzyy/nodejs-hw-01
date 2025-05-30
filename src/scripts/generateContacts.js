import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
const newArr = Array(number).fill(0).map(() => createFakeContact());
const allContacts = await readContacts();
await writeContacts([...allContacts, ...newArr]);
};

generateContacts(5);
