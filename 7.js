db.items.aggregate([
{
	$group: { 
		_id: "$Currently",
		"idArray": { $push: "$_id"}
	}
},
{
	$sort: {
		_id: -1
	}
},
{
	$limit: 1
},
{
	$unwind: "$idArray"
}
])


//Testing Query 7
// db.items.insert(
// 	{
// 		"_id": "7777777",
// 		"Name": "Test Task 7",
// 		"Currently": 18000,
// 		"Category": [
// 			"Task 7",
// 			"Database Systems"
// 		]
// 	}
// )
