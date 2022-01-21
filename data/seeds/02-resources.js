
exports.seed = function (knex, Promise) {
	return knex('resources').insert([
		{ resource_name: 'gun', resource_description: '9 bullets' },
		{ resource_name: 'rubiks cube', resource_description: 'a simple rubiks cube ' },
		{ resource_name: 'time', resource_description: 'get a job' },
		{ resource_name: 'money', resource_description: 'The gree beast that shapes the world' },
	]);
};