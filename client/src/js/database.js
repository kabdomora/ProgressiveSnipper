import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const postDb = async (content) => {
  console.error('postDb not implemented');
  console.log('Post to JATE');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({ jate: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

export const getAllDb = async () => {
  console.error('getDb not implemented');
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

export const getOneDb = async (id) => {
  console.error('getOneDb not implemented');
  console.log('GET from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

export const deleteDb = async (id) => {
  console.error('deleteDb not implemented');
  console.log('DELETE from the database', id);
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.delete(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

export const putDb = async (id, content) => {
  console.error('putDb not implemented');
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: id, jate: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

initdb();
