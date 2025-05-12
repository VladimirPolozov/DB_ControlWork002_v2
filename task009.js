use("`FirstBase");

db.restaurants.aggregate([
    {
       $unwind: "$grades"
    },
    {
        $group: {
            _id: "$name",
            minYear: { $min: { $year: "$grades.date" } },
            maxYear: { $max: { $year: "$grades.date" } }
        }
    },
    {
        $project: {
            _id: 1,
            name: 1,
            years: { $subtract: ["$maxYear", "$minYear"] }
        }
    },
    {
        $match: { "years": { $gte: 5 } }
    }
])