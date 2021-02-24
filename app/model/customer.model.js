module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  firstname: {
		type: Sequelize.STRING
	  },
	  lastname: {
		type: Sequelize.STRING
	  },
	  age: {
		  type: Sequelize.INTEGER
	  },
	  department: {
          type: Sequelize.STRING
	  }
	});
	
	return Customer;
}