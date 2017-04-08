db.items.find(
	{
		"Seller._Rating": { $gt: 1000}
	},
	{
		"_id": 0,
		"Seller._id": 1,
		"Seller._Rating": 1
	}
).sort(
	{ 
		"Seller._Rating": 1,
		"Seller._id": 1
	}
);