import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toWrite = path.resolve(__dirname, 'files/fileToWrite.txt');

const write = async () => {
	const stream = fs.createWriteStream(toWrite, 'utf8');
	const data = process.stdin;
	pipeline(data, stream, err => {
		if (err) throw new Error('Pipeline failed');
	});
};

await write();
