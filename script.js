const myName = 'ikENnA paSChaL',
	a = 'tHIs is nEw tO mE';

console.log('First array to capitalize ', myName);
console.log('Second array to capitalize ', a);

let myString,
	myString1,
	arr,
	newArr = [],
	caped,
	b,
	c = [],
	d;

arr = myName.split(' ');

// Solution 1
arr.forEach(e => {
	myString = e.charAt(0).toUpperCase() + e.substring(1).toLowerCase();
	newArr.push(myString);
});

caped = newArr.join(' ');
console.log(caped);
alert(caped);

newArr = [];

// Solution 2

arr.forEach(e => {
	myString = e[0].toUpperCase() + e.slice(1).toLowerCase();
	newArr.push(myString);
});

caped = newArr.join(' ');
console.log(caped);
alert(caped);
newArr = [];

// Solution 3

arr.forEach(e => {
	myString = `${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`;
	newArr.push(myString);
});

caped = newArr.join(' ');
console.log(caped);
alert(caped);

// Solution 3

b = a.split(' ');
console.log(b);

b.forEach(item => {
	myString1 = `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`;
	console.log(myString1);
	c.push(myString1);
});

console.log(c);

d = c.join(' ');
console.log(d);
alert(d);
