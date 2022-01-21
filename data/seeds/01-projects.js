
exports.seed = function (knex, Promise) {
	return knex('projects').insert([
		{
			project_name: 'kill bigfoot',
			project_description: 'destroy the hunter of man, who has been hunting man since the dawn of time',
			project_completed: false
		},
		{
			project_name: 'true happiness',
			project_description: 'solve a rubiks cube',
			project_completed: true
		},
		{
			project_name: 'WR of super mario 64',
			project_description: 'Speedrun super mario 64 until the World Record for fasted any% is yours',
			project_completed: false
		},
	]);
};