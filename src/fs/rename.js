import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldPath = path.resolve(__dirname, 'files/wrongFilename.txt');
const newPath = path.resolve(__dirname, 'files/properFilename.md');

const rename = async () => {
	fs.access(newPath, err => {
		if (!err) throw new Error('FS operation failed');

		fs.rename(oldPath, newPath, err => {
			if (err) throw new Error('FS operation failed');
		});
	});
};

await rename();
