import { Transform, pipeline } from 'stream';

const input = process.stdin;
const output = process.stdout;

const reverseStr = new Transform({
	transform(chunk, _encoding, callback) {
		this.push(`${chunk.toString().trim().split('').reverse().join('')}\n`);
		callback();
	},
});

const transform = async () => {
	pipeline(input, reverseStr, output, err => {
		if (err) throw new Error('Pipeline failed');
	});
};

await transform();
