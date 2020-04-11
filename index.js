const Mop = require('@grunmouse/multioperator');

/**
 * Обозначения для специальных видов произведений
 */

const opers = [
	/**
	 * точка - например скалярное произведение векторов
	 */
	'dot',
	/**
	 * крест - например вектороное произведение векторов
	 */
	'cross',
	/**
	 * крест в круге - произведение Кронекера
	 */
	'ocross',
	/**
	 * точка в круге - произведение Адамара
	 */
	'odot',
	/**
	 * ромбик - произведение Хатри-Рао
	 */
	'diamond'
].map(name=>(new Mop(name)));

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