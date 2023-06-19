import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Buffer } from 'buffer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newFilePath = path.resolve(__dirname, 'files/fresh.txt');
const data = new Uint8Array(Buffer.from('I am fresh and young'));

const create = async () => {
	fs.writeFile(newFilePath, data, { flag: 'wx' }, err => {
		if (err) throw new Error('FS operation failed');
	});
};

await create();
