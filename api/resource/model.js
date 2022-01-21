// build your `Resource` model here
const db = require('../../data/dbConfig')

async function get() {
	return db('resources')
}

async function post(resource) {
	const resource_id = await db('resources').insert(resource)
	return db('resources').where({ resource_id }).first()
}

module.exports = {
	get,
	post,
}
