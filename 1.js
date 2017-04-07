db.items.distinct("Seller._id").length;


//This also works but distinct much simpler
// db.items.aggregate([{ $group: {_id: "$Seller._id"} },{$count: "id"}])

//db.inventory.distinct( "dept" ) Dept is just the column so it would be just "seller._id"
// $ gives u value of the field

//ex. given a map {x, y} ... $x gives y



//For #2, count the non null Bids distinct.