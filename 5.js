
db.items.find({ "Category": { $size: 4 }}).count();

// db.items.aggregate(
// 	[
// 		{
// 			$match: {
// 				"Category": { $size: 4 }
// 			}
// 		}
// 	]
// ).count();