var products;    
	
products = [
   { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
   { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
   { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
   { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
   { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
];

var productsICanEat = [];


//imperative sum
var sumI = 0;
for(var i=1; i<1000; i+=1) {
  if (i % 3 === 0 || i % 5 === 0) {
	sumI += i;
  }
}

console.log(sumI);


//functional sum

var arr_mult_5, arr_mult_3, arr_w_dups, arr = [];

var arr_mult_5 = _.range(0, 1000, 5);
var arr_mult_3 = _.range(0, 1000, 3);
var arr_w_dups = arr_mult_5.concat(arr_mult_3);
var arr = _.uniq(arr_w_dups);

var sum = _.reduce(arr, function(a,b){return a+b});

console.log(arr);
console.log(sum);

// var sum_mult_5 = _.reduce(_.range(0,1001,3), function(memo, num){return memo+num}, 0);
// var sum_mult_3 = _.reduce(_.range(0,1001,5), function(memo, num){return memo+num}, 0);
// var sum = sum_mult_5 + sum_mult_3;


// var range = _.range(1001);

// var sum = _.reduce(_.range(1001), function(memo, num){
	// if (num % 3 === 0 || num% 5 === 0) {
		// return num;
	// }
// }, 0);
	

	
//imperative sum
var ingredientCountI = { "{ingredient name}": 0 };

for (i = 0; i < products.length; i+=1) {
	for (j = 0; j < products[i].ingredients.length; j+=1) {
		ingredientCountI[products[i].ingredients[j]] = (ingredientCountI[products[i].ingredients[j]] || 0) + 1;
	}
}

console.log(ingredientCountI['mushrooms']);

//functional sum

var ingredientCount = _(products).chain()
	.map(function(products){ return products.ingredients })
	.flatten()
	.value()
	.reduce(function(count, ingredient){
		count[ingredient] = (count[ingredient] || 0) + 1;
		// console.log(ingredient);
		// console.log(count[ingredient]);
		// console.log(count);
		return count;
	}, {})	
	
	
//{}
//{count["artichoke"] = 1} -> { artichoke: 1 }
//{count["sundtried tomatoes"] = 1} -> { artichoke: 1, sundried tomatoes: 1}


console.log(ingredientCount);
console.log(ingredientCount['mushrooms']);



    /* chain() together map(), flatten() and reduce() */

