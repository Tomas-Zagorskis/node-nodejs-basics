import { argv } from 'process';

// execute in terminal: node src/cli/args --propName 123 --prop2Name 'Hello'

const parseArgs = () => {
	const result = argv
		.filter(arg => arg.match(/--\w*/))
		.map(value => `${value.slice(2)} is ${argv[argv.indexOf(value) + 1]}`)
		.join(', ');
	console.log(result);
};

parseArgs();
