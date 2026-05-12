let name = "Amara";
let greeting = 'Hellllooo';
let message = `${greeting}, ${name}`;

console.log(message);
console.log(typeof greeting)

const age = 12;

if (age >= 18){
    console.log('Adult');
} else if (age >= 13){
    console.log('Tennager');
} else {
    console.log('Child');
}

const status = age >= 18? 'Adult' : 'Minor';
console.log(status)



for (let i = 0; i < 5; i++){
    console.log(i)
}


const fruits = ['apple', 'orange', 'kiwi', 'mango', 'Banana'];
for (const fruit of fruits) {
    console.log(fruit);
}

const person = {name: 'Amara', age: 25};
for
//const student ={
  //  name: 'Amara',
   // age: 22,
   // course: 'JavaScript',
 //   country: 'Nigeria'
//};

//const {name, age, course, country} = student;
//console.log(name);
//console.log(course);

//const {name: studentName, age: studentAge} = student;
//console.log(name);
//console.log(age);

