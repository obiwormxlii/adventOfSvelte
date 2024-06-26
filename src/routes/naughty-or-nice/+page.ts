import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		naughtyOrNice: fetch('https://advent.sveltesociety.dev/data/2023/day-one.json').then((res) =>
			res.json()
		)
	};
};
