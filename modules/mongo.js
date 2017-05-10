const mongoose = require('mongoose');

const behaviourSchema = mongoose.Schema({
  	mood:{
		      type : String,
		      default : ""
    },
    reason:{
		      type : String,
		      default : ""
    },
    note:{
		      type : String,
		      default : ""
    },
  	date: {
   		     type: Date,
    		   "default": Date.now
  	}
});

const BehaviourModel = mongoose.model('behaviour', behaviourSchema);

mongoose.connect('mongodb://localhost/feely', function(err) {
  if (err) {return console.error("Error connecting to MongoDB!");}
});

module.exports = BehaviourModel;
