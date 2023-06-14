import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toRead = path.resolve(__dirname, 'files/fileToRead.txt');

const read = async () => {
	fs.readFile(toRead, 'utf8', (err, data) => {
		if (err) throw new Error('FS operation failed');
		console.log(data);
	});
};

await read();
