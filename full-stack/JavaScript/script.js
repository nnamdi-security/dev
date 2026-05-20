let x = 1;

function hotFunction(){
    return x + x;
}

for (let i = 0; i < 10000; i++){
    hotFunction();
}
x = "I'm now a string";
console.log(hotFunction());


const students = [
    {name: "Amara", score: 70},
    {name: 'Ozioma', score: 75},
    {name: 'Ebuka', score: 98},
    {name: 'Oluoma', score: 46},
    {name: 'Oluchi', score: 88},
];

function filterStudents(students){
    return students.filter(student => (student.score >= 70));
}
const passedStdents = filterStudents(students);
console.log(passedStdents);


function filterProducts(products){
    return products.filter(product => product.price >= 500);
}

const products = 
[
    {name: 'tomatoes', price: 450},
    {name: 'potatoes', price: 520},
    {name: 'bananas', price: 500},
    {name: 'bounrvita', price: 1200},
    {name: 'himalayan', price: 400},
    {name: 'okotorigba', price: 230},
];

const toBuyList = filterProducts(products);
console.log(toBuyList);


async function fetchAndDisplay(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(`error occurred: ${error}`);

        return null;
    }
    
}

for (let i = 0; i < 1030; i++){
    console.log(i);
}


const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


const countries = ['Nigeria', 'Ghana', 'kenya', 'canada', 'US', 'Biafra', 'burkina faso'];

for (const country of countries){
    console.log(country);
}


const car = 

    {brand: 'toyota', model: 'camry', year: 2019};
    


for (const key in car){
    console.log(key, car[key]);
}


// While Loop
let count = 1;
while(count <= 10){
    console.log(count);
    count++
}


//.push()
const colors = [];
colors.push('Red', 'Blue', 'Green');
console.log(colors);


//.pop()
const foods = ['Beans', 'Rice', 'Garri', 'Corn'];
foods.pop();
console.log(foods);


//forEach()
const scores = [45, 67, 89, 90];
scores.forEach(score => console.log(score));

//map()
const prices = [100, 200, 300];
const doubled = prices.map(price => price * 2);
console.log(doubled);


//filter()
const ages = [12, 18, 25, 15, 30];
const adults = ages.filter(age => age >= 18);
 console.log(adults);



 function greet(name = 'Guest'){
    return `Hello ${name}`;

 }
 console.log(greet('Nnamdi'));
*/
 const greet = (name) => `Hello ${name}`;
 console.log(greet('Amara'));
