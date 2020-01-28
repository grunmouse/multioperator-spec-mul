const Mop = require('@grunmouse/multioperator');

const dot = new Mop('dot');
const cross = new Mop('cross');


const opers = [
	dot,
	cross
];

const operators = {};
const symbols = {};

opers.forEach((oper)=>{
	let name = oper.name;
	let NAME = name.toUpperCase();
	let key = oper.key;
	operators[name] = oper;
	symbols[NAME] = key;
});




module.exports = {
	operators,
	symbols
};