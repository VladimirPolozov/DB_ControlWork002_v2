use("`FirstBase");

db.restaurants.aggregate([
    {
        $unwind: "$grades"
    },
    {
        $match: {
            "grades.date": {
                $gte: ISODate("2014-01-01T00:00:00Z"),
                $lt: ISODate("2015-01-01T00:00:00Z")
            }
        }
    },
    {
        $group: {
            _id: "$name",
            avgScore: { $avg: "$grades.score" }
        }
    },
    {
        $match: { 
            avgScore: { $gt: 50 } 
        }
    }
])