import { PATH_DB } from '../contacts/constacts.js';
import fs from 'node:fs/promises';


export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
 await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2));

    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};


await removeAllContacts();
