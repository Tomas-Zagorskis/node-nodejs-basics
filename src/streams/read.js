import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toRead = path.resolve(__dirname, 'files/fileToRead.txt');

const read = async () => {
	const stream = fs.createReadStream(toRead, 'utf8');
	stream.on('error', () => {
		throw new Error('FS operation failed');
	});
	stream.on('data', data => process.stdout.write(data));
};

await read();
