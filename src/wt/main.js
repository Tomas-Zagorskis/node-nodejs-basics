import { Worker } from 'worker_threads';
import * as os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerPath = path.resolve(__dirname, 'worker.js');

const performCalculations = async () => {
	const result = [];
	const numOfCPUCores = os.cpus().length;

	for (let i = 10; i < numOfCPUCores + 10; i++) {
		let worker = new Worker(workerPath, { workerData: i });
		result.push(
			new Promise(resolve => {
				worker.on('message', data => {
					resolve({ status: 'resolved', data });
				});
				worker.on('error', () => {
					resolve({ status: 'error', data: null });
				});
			}),
		);
	}

	console.log(await Promise.all(result));
};

await performCalculations();
