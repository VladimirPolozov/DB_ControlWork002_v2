use("`FirstBase");

db.getCollection("restaurants").aggregate([
    {
        $match: {
            borough: {
                $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]
            }
        }
    },
    {
        $project: {
            _id: 1,
            name: 1,
            borough: 1,
            cuisine: 1
        }
    }
]);
