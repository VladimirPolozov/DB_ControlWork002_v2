use("`FirstBase");

db.restaurants.aggregate([
    {
        $unwind: "$grades"
    },
    {
        $group: {
        _id: {
            cuisine: "$cuisine",
            restaurant: "$name"
        },
        avgScore: { $avg: "$grades.score" }
        }
    },
    {
        $group: {
        _id: "$_id.cuisine",
        restaurants: {
            $push: {
                name: "$_id.restaurant",
                averageScore: "$avgScore"
            }
        }
    }
    },
    {
        $project: {
            _id: 0,
            cuisine: "$_id",
            restaurants: 1
        }
    }
])