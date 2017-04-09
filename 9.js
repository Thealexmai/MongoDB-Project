//Since it's null, $push doesn't work. Need to insert to initialize

db.items.update(
	{
		$and: [
			{ _id: "1678348584"},
			{ "Bids": null}
		]
	},
	{
		$inc: { "Number_of_Bids": 1},
		$set: { 
			"Bids": { "Bid": { "Amount": 1000 } }
		}
	}
);
