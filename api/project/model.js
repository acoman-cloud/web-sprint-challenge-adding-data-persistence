const db = require('../../data/dbConfig')

async function get() {
	const rows = db('projects')
	
	return rows
}

async function getById(id) {

}

async function post(project) {
	const rows = await db('projects')
		.insert(project)
		//.where('project_id' project)

	const result = {
		project_description: rows[0].project_description,
		project_id: rows[0].project_id,
		project_name: rows[0].project_name,
		project_completed: rows.reduce((acc, row) => {
			if (row.project_completed === 0) {
				return false
			} else {
				return true
			}
		}, [])

	}
	return rows
}

module.exports = {
	get,
	getById,
	post,
}
