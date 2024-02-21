console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i+=2){
    console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i <= 100; i++){
    if(i % 15 === 0){ console.log("FIZZBUZZ")}
    else if( i % 3 === 0){console.log("FIZZ")}
    else if (i % 5 === 0){console.log("BUZZ")}
    else{console.log(i)}
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
//while and do-while of 1 and 2

////////while1
let i = 1;
while(i <= 100){
    console.log(i);
    i +=2;
}
////dowhile1
let w =1;
do{console.log(w); w +=2;}
while(w < 100);


///while2
let g = 1;
while(g <= 100){
if (g % 15 === 0){console.log("FIZZBUZZ");}
else if(g % 3 === 0) {console.log("FIZZ");}
else if(g % 5 === 0){console.log("BUZZ");}
else{console.log(g);}
g++;}

//dowhile2
let t = 1;
do {
if (t % 15 === 0){console.log("FIZZBUZZ");}
else if(t % 3 === 0) {console.log("FIZZ");}
else if(t % 5 === 0){console.log("BUZZ");}
else {console.log(t);}
t++;
}while (t <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i = 0; i <= n; i++){
    if (i === value){console.log("Found value!"); break;}
    else{console.log("Did not find value");}
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let start = 0; start <= end; start++){

    if (start % fizzDivisor === 0 && start % buzzDivisor ===0){console.log("FIZZBUZZ");}
    else if (start % fizzDivisor === 0){console.log("FIZZ");}
    else if (start % buzzDivisor === 0){console.log("BUZZ");}
    else {console.log(start)}
}