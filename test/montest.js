const expect = require("chai").expect;
const api = require("../modules/api").api;

describe("Behaviour", () => {

	const behaviour = {
		"date": new Date(),
		"mood": "happy",
		"reason": "loveLife",
		"note": "amour"
	}


	it('should save a new behaviour', () => {

		const req = {
			body : behaviour
		}

		const res = {
			send : (behaviourReturned) => {
				expect(behaviourReturned.mood).to.equal("happy");
				expect(behaviourReturned.reason).to.equal("lovelife");
				expect(behaviourReturned.note).to.equal("amour");
			}
		}

		api.addItem(req, res);
	});

});
