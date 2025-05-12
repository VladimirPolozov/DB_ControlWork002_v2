use("`FirstBase");

db.restaurants.aggregate([
  {
    $addFields: {
      totalScore: { $sum: "$grades.score" }
    }
  },
  {
    $match: {
      totalScore: { $gt: 80, $lt: 100 }
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      totalScore: 1
    }
  }
])