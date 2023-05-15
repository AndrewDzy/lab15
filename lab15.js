let num = 0;
while (num <= 100) {
	let isSimple = true;
	for(let i=2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			isSimple = false;
			break;
		}
	}
	if (num > 1 && isSimple) {
		console.log(num);
	}
	num++;
}