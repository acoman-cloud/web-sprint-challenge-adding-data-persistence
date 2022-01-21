// build your `Task` model here
const db = require('../../data/dbConfig')

async function get() {
	const rows = await db('projects as p')
		.join('tasks as t', 't.project_id', 'p.project_id')
		.select(
			't.task_id',
			't.task_description',
			't.task_completed',
			't.task_notes',
			't.task_completed',
			'p.project_name',
			'p.project_description'
		)
	rows.forEach(i => i.task_completed = !!i.task_completed)
	return rows
}

async function post(task) {
	const task_id = await db('tasks').insert(task)
	const result = await db('tasks').where({ task_id }).first()
	console.log('!!false', !!0)
	console.log('!!true', !!1)
	return {
		...result,
		task_completed: !!result.task_completed,
	}
}

module.exports = {
	get,
	post,
}
