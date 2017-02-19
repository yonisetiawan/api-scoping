const meals = ["salad","vegans","apples","lemon","grilling","dinners","checken","rice","gluten"]

var getMeals = {
    choice:function() {
        var random = Math.floor(Math.random()*9)
        return meals[random]
    }
}

module.exports = getMeals;
