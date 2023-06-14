import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files/fileToRemove.txt');

const remove = async () => {
	fs.rm(filePath, err => {
		if (err) throw new Error('FS operation failed');
	});
};

await remove();
