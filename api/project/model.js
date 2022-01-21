const db = require('../../data/dbConfig')

async function get() {
	const rows = await db('projects')

	rows.forEach(i => i.project_completed = !!i.project_completed)
	return rows
}

async function post(project) {
	const project_id = await db('projects').insert(project)
	const result = await db('projects').where({ project_id }).first()
	return {
		...result,
		project_completed: !!result.project_completed,
	}
}

module.exports = {
	get,
	post,
}
