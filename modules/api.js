

const BehaviourModel = require('./mongo');

const api = {
	getItems : (req,res) => {
		BehaviourModel.find({})
			.exec( (err,docs) => {
				if(err) return res.status(500).json(err);
				res.status(200).json(docs)
			})
	},

	addItem : (req,res) =>{
		let behaviour = new BehaviourModel(req.body);
		behaviour.save( (err,doc) => {
			if(err) return res.status(500).json(err);
			res.status(200).json(doc)
		})
	}
}

module.exports = {
	api
}
