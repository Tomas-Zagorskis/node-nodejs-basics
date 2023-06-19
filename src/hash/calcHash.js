import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toRead = path.resolve(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
	fs.readFile(toRead, 'utf8', (err, data) => {
		if (err) throw new Error('FS operation failed');
		const hash = crypto.createHash('sha256');
		console.log(hash.update(data).digest('hex'));
	});
};

await calculateHash();
