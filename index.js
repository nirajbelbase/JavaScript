console.log("hellooooooooo!");
console.log("PINEAPPLE");

//window.alert("lol")
//this a comment g// ;
//document.getElementById("fH").textContent = ';
//document.getElementById("fP").textContent = '';
let FirstName = "Anirudra";
let LastName = "Upreti";
let FavoriteFood = 'juice';
let Email = 'anirudraupreti00001@gmail.com';
//console.log(`your name is ${FirstName} ${LastName}`);
//console.log(`your email address is ${Email}`);
//window.alert("Getting IP address")
//window.alert(`Name is ${FirstName} ${LastName}`)
//window.alert(`IP address is ${'192.168.1.1'}`)
//window.alert(`Email is ${Email}`)
//window.alert("GGs")


let online = true;
console.log(`I see you bro: ${online}`);

let fullName = "Anirudra Upreti";
let age = 17;
let student = true;

document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `I am a student: ${student}`;

let students = 34;
students = 35 + 1;
 students = students - 3;



console.log(students);



//let userName;
//userName = window.prompt("Name?");
//console.log(`Name is ${userName}`);

///////////////////////////////////////////////////////

// user input 
let Name;
document.getElementById("mySubmit").onclick = function() {
    Name = document.getElementById("mytext").value;
    console.log(`Name is ${Name}`)
    document.getElementById("fH").textContent = `Hello ${Name}`;
}

//window.prompt("how old are u");
    console.log(`age; ${age}`);


    // const = var that cant be changed 

    const pi = 3.14;
    let radius;
    let circumference;

    //radius = window.prompt("enter the radius of the circle");
    radius = Number(radius);

    circumference = 2 * pi * radius;
    console.log(`circumference is ${circumference}`);




    //counter
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const countLabel = document.getElementById("countLabel");

    let count = 0;

    decreaseBtn.onclick = function(){
count--;
countLabel.textContent = count;

    }

       increaseBtn.onclick = function(){
count++;
countLabel.textContent = count;

    }


    resetBtn.onclick = function(){
        count = 0;
        countLabel.textContent = count;}