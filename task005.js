use("`FirstBase");

db.restaurants.aggregate([
    {
        $match: {
            name: { $regex: "mon", $options: "i" }
        }
    },
    {
        $project: {
            _id: 0,
            name: 1,
            borough: 1,
            cuisine: 1,
            "address.coord": 1
        }
    }
])