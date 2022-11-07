let iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
let newFlavours = [...iceCreamFlavours];
newFlavours.push('root beer');
console.log(newFlavours);

console.log(newFlavours[0]);

console.log(newFlavours[newFlavours.length - 1 ]);

console.log(newFlavours.length)