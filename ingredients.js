const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let j = 0
while (j <= ingredients.length - 1){
  console.log(ingredients[j]);
  j++
}
// Write a for loop that prints out the contents of ingredients:
for( let i = 0; i < ingredients.length; i++){
  console.log( ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

ingredients.reverse()
for (let b = 0; b < ingredients.length; b++){
  console.log(ingredients[b]);
}
  
