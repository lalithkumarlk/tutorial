// For loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let a = ["A", "B", "C", "D", "E"];
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

let names = ["Deepthi", "Sapna", "Sowmya"];
for (let i = 0; i < names.length; i++) {
  console.log(i + "-->" + names[i]);
}

let fruits = ["apple", "ghrapes", "orange", "cherry"];
// let fruitLength = fruits.length // 4
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let alphabets = ["A", "B", "C", "D", "E", "F"];
for (let index = 0; index < alphabets.length; index++) {
  console.log(alphabets[index]);
}

// while loop
let index = 0;
while (index < 5) {
  // checking condition true
  console.log("inside of while loop");
  console.log(index); // print index value
  index++; // increment index value
}
console.log("out of while loop");

// // do while loop
console.log("----------");
let i = 0; // initial
do {
  // console.log("inside of while loop")
  console.log(i); // print
  i++; // increment
} while (i < 5); // condition
console.log("out of while loop");

// break continue

for (let i = 0; i < 5; i++) {
  console.log("inside of for loop");
  if (i == 2) {
    console.log("break for loop");
    continue;
  }
  console.log(i);
}
console.log("out of for loop");

for (let i = 0; i < 5; i++) {
  console.log("inside of for loop");
  if (i == 2) {
    console.log("continue for loop");
    continue;
  }
  console.log(i);
}
console.log("out of for loop");
