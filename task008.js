use("`FirstBase");

db.restaurants.aggregate([
    {
        $project: {
            name: 1,
            count: { $size: "$grades" }
        }
    },
    {
        $sort: { count: -1 }
    },
    {
        $group: {
            _id: null,
            maxCount: { $first: "$count" },
            restaurants: { $push: "$name" }
        }
    }
])