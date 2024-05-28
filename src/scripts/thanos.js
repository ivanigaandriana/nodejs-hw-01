import { PATH_DB } from '../contacts/constacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const fiterContact = contacts.filter(()=> Math.random() >= 0.5);
    const newData = JSON.stringify(fiterContact);
    await fs.writeFile(PATH_DB, newData);
};

await thanos();
