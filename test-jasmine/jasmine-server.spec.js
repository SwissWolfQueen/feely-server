const api = require("../modules/api").api;

let behaviour = {
	"date": new Date(),
	"mood": "happy",
	"reason": "loveLife",
	"note": "amour"
}

let behaviourToTest = null;

describe("Behaviour", () => {

	beforeEach( done => {
		let req = {
			body : behaviour
		}

		let res = {
			send : (behaviourReturned) => {
				behaviourToTest = behaviourReturned;
				done();
			}
		}
		api.addItem(req, res);
	});

	it('should save a new behaviour', () => {
		expect(behaviourToTest.mood).to.equal("happy");
		expect(behaviourToTest.reason).to.equal("lovelife");
		expect(behaviourToTest.note).to.equal("amour");
	});
})
