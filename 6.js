db.items.aggregate([
{
	$group: {
		_id: null,
		Average_First_Bid: { $avg: "$First_Bid"}
	}
},
{
	$project: {
		_id: 0,
		Average_First_Bid: 1
	}
}
])