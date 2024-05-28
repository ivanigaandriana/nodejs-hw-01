import { PATH_DB } from '../contacts/constacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    for (let i = 0; i < number; i ++) {
        contacts.push(createFakeContact());
    }
    const newData = JSON.stringify(contacts);
    await fs.writeFile(PATH_DB, newData);
};

await generateContacts(5);
