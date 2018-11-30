
module.exports = function (sequelize, Sequelize) {

	var api = sequelize.define('api', {

		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},

		text: {
			type: Sequelize.STRING,
			notEmpty: true
		}

	})
	return api
}