const fs = require('fs/promises');
const path = require('path');
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname,  "/contacts.json");

const getContacts = async () => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
}

const getContactById = async (contactId) => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const result = contacts.find((item) => item.id == contactId);
    if(!result){
        return null;
    }
    return result;
}

const remove = async (contactId) => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data); 
    const idx = contacts.findIndex((item) => item.id == contactId);
    if (idx === -1) {
        return null;
    }
    const delContacts = contacts.filter((_, index) => index !== idx);
    await fs.writeFile(contactsPath, JSON.stringify(delContacts));
    return contacts[idx];
}

const add = async (body) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const newContacts = {...body, id: v4()}
  contacts.push(newContacts)
  await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return newContacts;
}

const update = async (contactId, body) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...body, id: contactId };
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[idx];
}

module.exports = {
  getContacts,
  getContactById,
  remove,
  add,
  update,
}
