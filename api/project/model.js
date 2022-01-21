const db = require('../../data/dbConfig')

async function get() {
	return db('projects')
}

async function post(project) {
	return 'post project'
}

module.exports = {
	get,
	post,
}
