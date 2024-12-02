console.log("Hello World");

//Task1
//when flag clicked
//set myFavNumber to 80
//if myFavNumber = 5
//then say "my favourite number is 5 too!"

let myFavNumber = 80;
   if (myFavNumber === 5) {
    console.log("my favourite number is 5 too!");
   }


//Task2
// when flag is clicked
//ask "What's your name?" and wait
//if myvaraible = Ben then
// say "That's my name too!"
// else say "?!That's a silly name..."

let answer = prompt("What's your name?"); // the prompt function allow you to input data
    if (answer === "Ben") {
        console.log("That's my name too!");
      } else {
        console.log("?!That's a silly name...")
      }
    

//Task3
//when flag is clicked
//set weatherType to raining
//if weatherType = raining
//then say "Take an umbrella!"
//else if weatherType = sunny 
//then say "Don't forget suncream!"

let weatherType = "raining";
   if (weatherType === "raining") {
    console.log("Take an umbrella!");
   } else if (weatherType === "sunny") {
    console.log("Don't forget suncream!");
   }