const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const functionIntervalMs = async (
	interval: number,
	duree: number,
	uneString?: string
) => {
	let i: number = 0;
	// interval = interval / 1000;
	if (uneString == undefined) {
		uneString = "Non definie";
	}
	do {
		console.log(`iteration ${i} pis ici c'est la string: ${uneString}`);

		await sleep(interval);
		i++;
		duree--;
	} while (duree >= 0);
};

functionIntervalMs(1000, 3);
