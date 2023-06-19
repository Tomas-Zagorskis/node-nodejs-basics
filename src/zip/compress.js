import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toRead = path.resolve(__dirname, 'files/fileToCompress.txt');
const toWrite = path.resolve(__dirname, 'files/archive.gz');

const compress = async () => {
	const input = fs.createReadStream(toRead);
	const output = fs.createWriteStream(toWrite);
	const gzip = zlib.createGzip();

	pipeline(input, gzip, output, err => {
		if (err) throw new Error('Pipeline failed');
	});
};

await compress();
