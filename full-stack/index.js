let x = 1;

function hotFunction(){
    return x + x;
}

for (let i = 0; i < 10000; i++){
    hotFunction();
}
x = "I'm now a string";
console.log(hotFunction());