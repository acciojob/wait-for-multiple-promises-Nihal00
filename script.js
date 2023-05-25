//your JS code here. If required.
const output = document.getElementById('output');
// const table = document.querySelector('table');

const row = output.insertRow(-1);
const col1 = row.insertCell(0);
const col2 = row.insertCell(1);
col1.innerText = "Loading...";
col2.innerText = "Loading...";

const promises = [
	new Promise (resolve => {
		setTimeout(() => {
			resolve();
			return "Promise 1";
		}, Math.random() * 3000);
	}),

	new Promise (resolve => {
		setTimeout(() => {
			resolve();
		}, Math.random() * 3000);
	}),

	new Promise (resolve => {
		setTimeout(() => {
			resolve()
		}, Math.random() * 3000);
	})
];

const timeArray = [];
Promise.all(promises).then((result) => {

	row.remove();

	const start = performance.now();
	const tableRow = output.insertRow(-1);
	const tableCel1 = tableRow.insertCell(0);
	const tableCel2 = tableRow.insertCell(1);
	const end = performance.now();
	const time = end - start;
	timeArray.push(time);
	tableCel1.innerText = value;
});






