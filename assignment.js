//1. indexing an array 

let colors = ["Red", "Orange","Yellow","Blue","Black"]

console.log(colors[0])
console.log(colors[2])
console.log(colors[4])


//2. objects methods

let cars = {
    brand: "audi",
    model: "Q7",
    year: 2024,
    price: 15000000
}

console.log(Object.keys(cars))
console.log(Object.values(cars))
console.log(Object.entries(cars))

// 3.if & else

let temperature = 27

if(temperature>=30){
    console.log("It's hot")
}
else{
    console.log("It's cold")
}

//4. else if

let marks = 65

if(marks>=75){
    console.log("Distinction")
}
else if(marks>=60){
    console.log("Credit")
}
else if(marks>=50){
    console.log("Pass")
}
else {
    console.log("Fail")
}

//5. for loop


for(let i =5 ; i<=100; i++){
    console.log(i)
}

// 6. loop an array

let products = ["Laptop", "Phone", "Tablet", "Headphones", "Charger"]

for(product of products){
    console.log(product)
}

// 7. while loop

let i = 1

while(i<=10){
    console.log(i)
    i++
}

// 8.break


for(let num= 1; num<=20;num++){
    if(num>=13)break
    console.log(num)
    
}

