import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptPath = path.resolve(__dirname, 'files/script.js');

const spawnChildProcess = async args => {
	const child = spawn('node', [scriptPath, ...args]);

	process.stdin.on('data', data => {
		child.stdin.write(data);
	});

	child.stdout.on('data', data => {
		console.log(data.toString());
	});
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--arg1', '--arg2']);
