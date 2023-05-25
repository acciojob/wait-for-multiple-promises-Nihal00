//your JS code here. If required.
const output document.getElementById('output');

const promises = [];

const prom1 = new Promise((resolve) => setTimeout(resolve, 1000, "Promise 1"));
promises.push(prom1);

const prom2 = new Promise((resolve) => setTimeout(resolve, 2000, "Promise 2"));
promises.push(prom2);

const prom3 = new Promise((resolve) => setTimeout(resolve, 3000, "Promise 3"));
promises.push(prom3);

Promise.all(promises).then((value) => {
	document.getElementById('')
});