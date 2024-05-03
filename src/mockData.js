import casual from 'casual';

var db = { foodRecipes: [] };

for (var i = 101; i <= 115; i++) {
    var food = {};
    food.id = i;
    food.food = casual.words(casual.integer(1,6));
    food.price = casual.integer(1,1000)
    db.foodRecipes.push(food);
}

console.log(JSON.stringify(db));
