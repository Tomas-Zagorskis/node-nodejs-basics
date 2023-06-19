import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.resolve(__dirname, 'files');

const list = async () => {
	fs.readdir(filesPath, (err, files) => {
		if (err) throw new Error('FS operation failed');
		files.forEach(file => {
			console.log(file);
		});
	});
};

await list();
