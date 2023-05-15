const mongoose = require("mongoose");

module.exports = () => {
	const DB='mongodb+srv://mern1234:mern1234@cluster0.tjfidvy.mongodb.net/mernstack?retryWrites=true&w=majority'
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.set('strictQuery', false);
		mongoose.connect(DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
