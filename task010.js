use("`FirstBase");

db.restaurants.aggregate([
    { $unwind: "$grades" },
    {
        $project: {
            borough: 1,
            score: "$grades.score",
            dayOfWeek: { $dayOfWeek: { $toDate: "$grades.date" } }
        }
    },
    {
        $group: {
            _id: { borough: "$borough", day: "$dayOfWeek" },
            count: { $sum: 1 },
            avgScore: { $avg: "$score" }
        }
    },
    {
        $project: {
            _id: 0,
            borough: "$_id.borough",
            dayOfWeek: "$_id.day",
            count: 1,
            avgScore: { $round: ["$avgScore", 2] }
        }
    },
    { $sort: { borough: 1, dayOfWeek: 1 } }
])