const start = 1;
const end = 100;

for (let i = start; i <= end; i++) {
	const isDivisibleBy3 = i % 3 === 0 ? true : false;
	const isDivisibleBy5 = i % 5 === 0 ? true : false;

	if (!isDivisibleBy3 && !isDivisibleBy5) console.log(i);
	
	if (isDivisibleBy3 && !isDivisibleBy5) console.log('Visual');	

	if (isDivisibleBy5 && !isDivisibleBy3) console.log('Nuts');

	if (isDivisibleBy3 && isDivisibleBy5) console.log('Visual Nuts');
}
