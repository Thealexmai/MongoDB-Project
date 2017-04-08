db.items.update(
	{ _id: "1678348584"},
	{
		$inc: { "Number_of_Bids": 1},
		$set: {
			"Currently": 1000
		}
	}

);