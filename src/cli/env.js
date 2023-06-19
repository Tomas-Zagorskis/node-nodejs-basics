import { env } from 'process';

const parseEnv = () => {
	Object.entries(env)
		.filter(([key, _value]) => key.match(/^RSS_/))
		.forEach(([key, value]) => console.log(`${key}=${value}`));
};

parseEnv();
