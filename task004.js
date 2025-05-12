use("`FirstBase");

db.restaurants.aggregate([
    {
        $match: {
          "address.coord.1": { $gt: 42, $lt: 52 }
       }
    },
    {
        $project: {
            _id: 0,
            restaurant_id: 1,
            name: 1,
            address: 1
        }
    }
])