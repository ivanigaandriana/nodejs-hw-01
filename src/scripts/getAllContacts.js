import { PATH_DB } from '../contacts/constacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
};

console.log(await getAllContacts());
