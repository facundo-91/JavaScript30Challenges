const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
console.log('%c I am some great text', 'font-size: 24px; color: red');

// warning!
console.warn('Some warning text');

// Error :|
console.error('Some error text');

// Info
console.info('Some info text');

// Testing
console.assert(1 === 2, 'That is wrong!');

// clearing
//console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
	console.group(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd(`${dog.name}`);
})

// counting
console.count('John');
console.count('John');
console.count('Doe');
console.count('Doe');
console.count('Doe');
console.count('John');
console.count('John');
console.count('Doe');
console.count('John');
console.count('John');
console.count('John');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/facundo-91')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching data');
		console.log(data);
	}
);

// table for array of objects
console.table(dogs);