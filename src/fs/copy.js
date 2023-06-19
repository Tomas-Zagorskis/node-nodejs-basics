import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copyFilesPath = path.resolve(__dirname, 'files');
const pasteFilesPath = path.resolve(__dirname, 'files_copy');

const copy = async () => {
	fs.cp(
		copyFilesPath,
		pasteFilesPath,
		{ recursive: true, errorOnExist: true, force: false },
		err => {
			if (err) throw new Error('FS operation failed');
		},
	);
};

await copy();
