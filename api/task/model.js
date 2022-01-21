// build your `Task` model here
const db = require('../../data/dbConfig')

async function get() {
	return db('tasks')
}

async function post(task) {
	const rows = await db('tasks')
		.insert(task)
		.then(([id]) => db('tasks').where('task_id', id))
	return rows
}

module.exports = {
	get,
	post,
}
