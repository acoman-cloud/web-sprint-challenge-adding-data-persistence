// build your `Resource` model here
const db = require('../../data/dbConfig')

async function get() {
	return db('resources')
}

async function post(resource) {
	const rows = await db('resources')
		.insert(resource)
		.then(([id]) => db('resources').where('resource_id', id))
	return rows
}

module.exports = {
	get,
	post,
}
