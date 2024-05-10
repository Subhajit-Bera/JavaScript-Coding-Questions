let data = new Map(
    [
        ["name", 'Peter'],
        [true, "this is a bool key in map"]
    ]
)

//Adding new Key
data.set("city","Kolkata");

//Accessing value from a key
// console.log(data.get("name"));

//Updating value of a Key
data.set("name","Subh");

//has method:
// console.log(data.has("name"));
// console.log(data.has(true));

//Accessing value from a key
// console.log(data.get("name"));




//Adding Object as Key:
// let objKey = { name: "John" };
// data.set(objKey, "Value associated with object key");

//Add Empty object as key
// data.set({},"This is a object Key");


// Using a function as a key
// function functionTraditional() {
//     return "Function key";
// }
// data.set(functionTraditional, "Value associated with functionTraditional key");

//OR

// data.set(function(){},"Traditional Function");


//Adding arrow function as Key
// let functionArrow = () => {};
// data.set(functionArrow, "Value associated with functionArrow Key");

//OR

// data.set(()=>{},"value of another arrow function");


//Print Entire Map
// console.log(data);

//Print Key
// console.log(data.keys());

//Print Values
// console.log(data.values());

//Loop 

//For Each : In case of For Each loop first parameter is value and second parameter is key
// data.forEach((v,k)=>{
//     console.log(`Value is ${v}`);
//     console.log(`Key is ${k}`);
   
// })

//For of loop
for(k of data){
    console.log(k); //Print key and value in form of array
    console.log(k[0]) //Print only key
    console.log(k[1]) //Print only value

    console.log("\n");
}


//Another way of access key and value using for of
for([k,v] of data){
    console.log(`${k} : ${v}`);
}

