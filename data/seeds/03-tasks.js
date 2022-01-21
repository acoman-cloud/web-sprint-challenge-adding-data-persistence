
exports.seed = function (knex, Promise) {
	return knex('tasks').insert([
		{
			task_description: 'buy gun',
			task_notes: '',
			task_completed: true,
			project_id: 1,
		},
		{
			task_description: 'find bigfoot',
			task_notes: '',
			task_completed: false,
			project_id: 1,
		},
		{
			task_description: 'kill bigfoot',
			task_notes: '',
			task_completed: false,
			project_id: 1,
		},
		{
			task_description: 'play super mario 64',
			task_notes: '',
			task_completed: true,
			project_id: 3,
		},
		{
			task_description: 'check if wr === true',
			task_notes: '',
			task_completed: false,
			project_id: 3,
		},
		{
			task_description: 'if not, repeat',
			task_notes: '',
			task_completed: true,
			project_id: 3,
		},
	])
}