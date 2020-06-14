/*//----------------CHAPTER 1 start--------------------------
// task 1)
alert("Welcome to our website");
// task 2)
alert("Error! please enter a valid password.");
// task 3)
alert("Welcome to JS Wonderland...\nHappy coding!");
// task 4)
alert("Welcome to JS Wonderland");
alert("Happy coding!");
//----------------CHAPTER 1-------------------------------


//----------------CHAPTER 2----------------------------
// task 1)
var uName;

// task 2)
var myyName = "Iqra Farooq Malik";

// task 3)
var message = "Hello World";
alert(message);

// task 4)
var name = "Jhone Doe";
var age = "15 years old";
var certificaton = "Certified Mobile Application Development";
alert(+name);
alert(age);
alert(certificaton);

// task 5)
var x = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(x);

// task 6)
var email = "iqramalik200021@gmail.com";
alert("My email address is " + email);

// task 7)
var book = "A smarter way to learn JavaScript";
alert(book);

// task 8)
document.write("Yay! I can write HTML content through JavaScript");

// task 9)
var line = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(line);
//------------------------CHAPTER 2 end--------------------------

//-------------------------CHAPTER 3 start-----------------------
// task 1)
var age = 19;
alert(age);

//task 2)
var visit = 12;
alert("You have visited this site " + age + " times");

// task 3)
var birthYear = 2000;
document.write(
  "My birth year is " +
    birthYear +
    "\nData type of my declared variable is number" +
    "<br>"
);

// task 4)
var visitorName = "John Doe";
var productTitle = "T-shirt";
var Quantity = 5;
document.write(
  visitorName +
    " ordered " +
    Quantity +
    " " +
    productTitle +
    "(s) on XYZ Clothing store"
);
//-------------------------CHAPTER 3 end---------------------------

//-------------------------CHAPTER 4 start-------------------------
// task 1)
var x, y, z;

// task 2)
var $name, _year, age, work, book;
//var .x , /name , 1name ,?age ,9y;

// task 3)
document.write(
  "<h1>Rules for naming JS variables</h1> <p> Variable names can only contain numbers ,$ and _ for example $my_1stVariable <br>Variables must begin with a letter , $ or _ For example $name, _name or name <br>Variable names are case sensitive<br>Variable names should not be JS keywords</p>"
);
//--------------------------CHAPTER 4 end---------------------------------


//------------------------CHAPTER 5 start---------------------------------
// task 1)
var x = 2,
  y = 10;
document.write("Sum of 2 and 10 is " + (x + y));

// task 2)
document.write("<br>Subtraction of 2 and 10 is " + (x - y));
document.write("<br>Multiplication of 2 and 10 is " + x * y);
document.write("<br>Division of 2 and 10 is " + x / y);
document.write("<br>Modulus of 2 and 10 is " + (x % y));

// task 3)
var z;
document.write("<br><br> Value after variable declaration is: " + z);
z = 15;
document.write("<br>Initial value: " + z);
z++;
document.write("<br>Value after increment is: " + z);
z += 7;
document.write("<br>Value after addition is: " + z);
z--;
document.write("<br>Value after decrement is: " + z);
z %= 3;
document.write("<br>The remainder is: " + z);
// task 4)
var ticket = 600;
document.write(
  "<br><br>Total cost to buy 5 tickets to a movie is " + ticket * 5 + "PKR"
);

// task 5)
document.write("<br><br>Table of 6<br>");
for (var i = 1; i <= 10; i++) {
  document.write("6*" + i + "=" + i * 6 + "<br>");
}

// task 6)
var c = 35;
var f = (c * 9) / 5 + 32;
document.write("<br><br>" + c + "C is " + f + "F");
f = 50;
c = ((f - 32) * 5) / 9;
document.write("<br>" + f + "F is " + c + "C");

// task 7)
var priceItem1 = 200;
var priceItem2 = 50;
var qtyItem1 = 2;
var qtyItem2 = 4;
var shipCharges = 100;
var totalCost = priceItem1 * qtyItem1 + priceItem2 * qtyItem2 + shipCharges;
document.write(
  "<br><br><br><h1>Shopping cart</h1><br>Price of item 1 " +
    priceItem1 +
    "<br>Quatity of item 1 is " +
    qtyItem1 +
    "<br>Price of item 2 " +
    priceItem2 +
    "<br>Quatity of item 2 is " +
    qtyItem2 +
    "<br>Shipping Charges " +
    shipCharges +
    "<br></br>Total cost of your order is " +
    totalCost
);

// task 8)
var totalMarks = 1100;
var marksObt = 1000;
var percentage = (marksObt / totalMarks) * 100;
document.write(
  "<br><br><h1>Mark Sheet</h1><br>Total marks: " +
    totalMarks +
    "<br>Marks obtained: " +
    marksObt +
    "<br>percentage: " +
    percentage +
    "%"
);

// task 9)
var dollar = 10;
var riyal = 25;
var currency = 10 * 104.8 + 25 * 28;
document.write(
  "<br><br><h1>Currency in PKR</h1><br>Total cirrency in PKR : " + currency
);

// task 10)
var num = 10;
num = num + 5 + num * 10 + num / 2;
// task 11)
var currentYear = 2020;
var birthYear = 2000;
var a = currentYear - birthYear;
document.write(
  "<br><br><h1>Age Calculator</h1><br>current year: " +
    currentYear +
    "<br>birth year: " +
    birthYear +
    "<br>your age: " +
    a
);

// task 12)
var r = 5;
var cir = 2 * 3.142 * r;
var area = 3.142 * r * r;
document.write(
  "<br><br><h1>The Geometrizer</h1><br>radius of circle : " +
    r +
    "<br>circumference is: " +
    cir +
    "<br>area is: " +
    area
);

// task 13)
var fs = "LAYS Yogurt And Herb";
var curAge = 10;
var maxAge = 100;
var spd = 2;
var ts = (maxAge - curAge) * spd;
document.write(
  "<br><br><h1> The Lifetime Supply Calculator</h1><br>Favourite snack: " +
    fs +
    "<br>current age: " +
    curAge +
    "<br>maximum age: " +
    maxAge +
    "<br>amount of snack per day: " +
    spd +
    "<br>You will need " +
    ts +
    " " +
    fs +
    " to last you until the ripe old age of " +
    maxAge
);
//-----------------------------CHAPTER 5 end------------------------


//----------------------------CHAPTER 6-9 start---------------------
// task 1)
var av = 20;
document.write(
  "<br>Result<br>the value of a is: " +
    av +
    "<br>---------------------" +
    "<br><br>the value of ++a is: " +
    ++av +
    "<br>now value of a is: " +
    av +
    "<br><br>the value of a++ is: " +
    av++ +
    "<br>now the value of a is: " +
    av +
    "<br><br> value of --a is: " +
    --av +
    "<br>now value of a is: " +
    av +
    "<br><br>value of a-- is: " +
    av-- +
    "<br>now value of a is: " +
    av
);

// task 2)
var a = 2,
  b = 1;

document.write(
  "<br><br><br>a is:" +
    a +
    "<br>b is: " +
    b +
    "<br>result is:<br>--a: " +
    --a +
    "<br>--a- --b:" +
    (--a - --b) +
    "<br>--a - --b + ++b:" +
    (--a - --b + ++b)
);
var res = --a - --b + ++b + b--;
document.write("<br>--a - --b + ++b + b--:" + res);

// task 3)
var n = prompt("write your name:");
alert(n + " welcome to our website");

// task 5)
var m = prompt("input a number");
if (m === "") {
  m = 5;
}
document.write("<br><br>Table of " + m + "<br>");
for (var i = 1; i <= 10; i++) {
  document.write(m + "*" + i + "=" + i * m + "<br>");
}

// task 6)
var sub1 = prompt("enter subject 1 name");
var sub2 = prompt("enter subject 2 name");
var sub3 = prompt("enter subject 3 name");
var marks1 = +prompt("enter marks of subject 1");
var marks2 = +prompt("enter marks of subject 2");
var marks3 = +prompt("enter marks of subject 3");
var tm = marks1 + marks2 + marks3;
var p = (tm / 300) * 100;
document.write(
  "<br></br><br><table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>" +
    sub1 +
    "</td><td>100</td><td>" +
    marks1 +
    "</td><td>" +
    (marks1 / 100) * 100 +
    "%</td></tr></tr><tr><td>" +
    sub2 +
    "</td><td>100</td><td>" +
    marks2 +
    "</td><td>" +
    (marks2 / 100) * 100 +
    "%</td></tr></tr><tr><td>" +
    sub3 +
    "</td><td>100</td><td>" +
    marks3 +
    "</td><td>" +
    (marks3 / 100) * 100 +
    "%</td></tr><tr><th></th><th>300</th><th>" +
    tm +
    "</th><th>" +
    p +
    "%</th></tr></table>"
);

//--------------------------CHAPTER 6-9 end----------------------

//------------------------CHAPTER 9-11 start----------------------
// task 1)
var city = prompt("enter your city");
if (city === "karachi" || city === "Karachi") {
  alert("welcome to city of lights");
} else {
  alert("you are not living in karachi");
}

// task 2)
var gender = prompt("enter your gender");
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma'am");
} else {
  alert("Good Morning");
}

// task 3
var color = prompt("enter traffic signal light color");
if (color === "red") {
  alert("Must stop");
} else if (color === "Yellow") {
  alert("Ready to move");
} else {
  alert("move now");
}

// task 4)
var fuel = +prompt("enter fuel in liters");
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("you have enough fuel");
}

// task 5)
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
// task 6)
var sub1Marks = +prompt("enter marks of first subject");
var sub2Marks = +prompt("enter marks of second subject");
var sub3Marks = +prompt("enter marks of third subject");
var tMarks = +prompt("enter total marks");
var oMarks = sub1Marks + sub2Marks + sub3Marks;
var subPer = (oMarks / tMarks) * 100;
document.write(
  "<h1>Marks Sheet</h1><br>Total marks: " +
    tMarks +
    "<br>Marks obtained: " +
    oMarks +
    "<br>Percentage: " +
    subPer
);
if (subPer >= 80) {
  document.write("<br>Grade: A-one<br>Remarks:Excellent");
} else if (subPer >= 70) {
  document.write("<br>Grade: A<br>Remarks:Good");
} else if (subPer >= 60) {
  document.write("<br>Grade: B<br>Remarks:You need to improve");
} else if (subPer < 60) {
  document.write("<br>Grade: Fail<br>Remarks:Sorry");
} else {
  document.write("<br>please input correct numbers");
}

// task 7)
var guessNum = +prompt("Guess a number between 1 to 10");
var actuallNum = 5;
if (guessNum === actuallNum) {
  alert("Bingo! Correct answer");
} else if (guessNum === actuallNum + 1) {
  alert("Close enough to the correct answer");
} else {
  alert("wrong guess!");
}

// task 8)
var gnum = +prompt("input a number");
if (gnum % 3 === 0) {
  alert("the input number is divisible by 3");
} else {
  alert("the input number is not divisible by 3");
}

//task 9)
var number = +prompt("input a number");
if (number % 2 === 0) {
  alert("the input number is an even number");
} else {
  alert("the input number is an odd number");
}

// task 10)
var temp = +prompt("input temperature");
if (temp > 40) {
  alert("it is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today’s Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("please input correct number");
}

// task 11)
var num1 = +prompt("input first number");
var num2 = +prompt("input second number");
var oper = prompt("input operation");

if (oper === "+") {
  alert(num1 + num2);
} else if (oper === "-") {
  alert(num1 - num2);
} else if (oper === "*") {
  alert(num1 * num2);
} else if (oper === "/") {
  alert(num1 / num2);
} else if (oper === "%") {
  alert(num1 % num2);
} else {
  alert("please input correct data");
}
//-------------------------CHAPTER 9-11 end--------------------------

//------------------------CHAPTER 12-13 start----------------------

// task 1
var char = prompt("enter a character");
var c = char.charCodeAt();
if (c >= 65 && c <= 90) {
  alert("The entered character is an uppercase letter");
} else if (c >= 97 && c <= 122) {
  alert("The entered character is an lowercase letter");
} else if (c >= 48 && c <= 57) {
  alert("The entered character is a number");
} else {
  alert("The entered character is not a number and nor an alphabat");
}

// task 2)
var intNum1 = +prompt("input first number");
var intNum2 = +prompt("input second number");
if (intNum1 > intNum2) {
  alert("first input number is larger");
} else if (intNum1 < intNum2) {
  alert("second input number is larger");
} else {
  alert("input numbers are equal");
}


// task 3)
var num = +prompt("enter a number");
if (num > 0) {
  alert("positive number");
} else if (num < 0) {
  alert("negative number");
} else {
  alert("zero");
}

// task 4)
var c = prompt("enter a character");
if (
  c === "a" ||
  c === "A" ||
  c === "e" ||
  c === "E" ||
  c === "i" ||
  c === "I" ||
  c === "o" ||
  c === "O" ||
  c === "u" ||
  c === "U"
) {
  alert("true");
} else {
  alert("false");
}

// task 5)
var pass = 123456;
var enterPass = +prompt("enter your password");
if (enterPass === 123456) {
  alert("Correct! The password youentered matches the original password");
} else {
  alert("Incorrect password");
}

// task 6)
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// task 7)
var time = +prompt("enter time");
if (time >= 0000 && time < 1200) {
  alert("Good morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening");
} else if (time >= 2100 && time < 2359) {
  alert("Good night");
} else {
  alert("enter correct time");
}

//---------------------------CHAPTER 12-13 end-----------------------



//-------------------------CHAPTER 14-16 start------------------------

// task1)
var arr=[];

// task2)
var arr=Array();

// task 3)
var arr="name";

// task 4)
var arr=[1,4,7,8];

// task 5)
var arr=[true,false];

// task 6)
var arr=["ali",12,"5th class"];

// task 7)
var array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write(
  "<h1>Qualifications</h1><br>1)" +
    array[0] +
    "<br>2)" +
    array[1] +
    "<br>3)" +
    array[2] +
    "<br>4)" +
    array[3] +
    "<br>5)" +
    array[4] +
    "<br>6)" +
    array[5] +
    "<br>7)" +
    array[6] +
    "<br>8)" +
    array[7]
);

// task 8)
var name = ["sana", "sara", "rabia"];
var score = [450, 300, 470];

document.write(
  "Score of " +
    name[0] +
    " is " +
    score[0] +
    ". percentage: " +
    (score[0] / 500) * 100 +
    "%<br>Score of " +
    name[1] +
    " is " +
    score[1] +
    ". percentage: " +
    (score[1] / 500) * 100 +
    "%<br>Score of " +
    name[2] +
    " is " +
    score[2] +
    ". percentage: " +
    (score[2] / 500) * 100 +
    "%"
);

// task 9)
var colorArray = ["yellow", "green", "blue"];
document.write("color array contains: " + colorArray);
var color = prompt("enter color you want to add at the begining of the array");
colorArray.unshift(color);
document.write(
  "<br><br>Now color array contains after adding " +
    color +
    " at the begining: " +
    colorArray
);
color = prompt("enter color you want to add at the end of the array");
colorArray.push(color);
document.write(
  "<br><br>Now color array contains after adding " +
    color +
    " at the end: " +
    colorArray
);
colorArray.unshift("skyblue,pink");
document.write(
  "<br><br>Now color array contains after adding two more colors at the begining: " +
    colorArray
);
colorArray.shift();
document.write(
  "<br><br>Now color array contains after deleting first color: " + colorArray
);
colorArray.pop();
document.write(
  "<br><br>Now color array contains after deleting last color: " + colorArray
);
var ind = +prompt("enter index at which you want to add a color");
color = prompt("enter which color you want to add");
colorArray.splice(ind, 0, color);
document.write(
  "<br><br>Now color array contains after adding " +
    color +
    " at index " +
    ind +
    ": " +
    colorArray
);
ind = +prompt("enter index at which you want to delete colors");
var num = +prompt("enter how many colors ypu want to delete");
colorArray.splice(ind, num);
document.write(
  "<br><br>Now color array contains after deleting " +
    num +
    " colors at index " +
    ind +
    ": " +
    colorArray
);


// task 10)
var scoreArray = [200, 250, 500, 100];
scoreArray.sort();
alert(scoreArray);

// task 11)
var cities = ["karachi", "lahore", "faislabad", "islamabad", "quetta"];
var selectedCities = cities.slice(1, 3);
alert(selectedCities);

// task 12)
var arr = ["This ", " is ", " my ", " cat"];
var string = arr.join("");
alert(string);

// task 13)
var devices = ["keyboard", "mouse", "monitor", "printer"];
document.write("Devices:<br> " + devices + "<br><br>");
for (var i = 0; i < devices.length; i++) {
  document.write("Out:<br>" + devices[i] + "<br>");
}
// task 14)
var devices = ["keyboard", "mouse", "monitor", "printer"];
document.write("Devices:<br> " + devices + "<br><br>");
for (var i = devices.length - 1; i >= 0; i--) {
  document.write("Out:<br>" + devices[i] + "<br>");
}
// task 15)

var a = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", " Haier"];
document.write(
  "<select><option value='Apple'>" +
    a[0] +
    "</option><option value='Samsung'>" +
    a[1] +
    "</option><option value='Motorola'>" +
    a[2] +
    "</option><option value='Nokia'>" +
    a[3] +
    "</option><option value='Sony'>" +
    a[4] +
    "</option><option value='Haier'>" +
    a[5] +
    "</option></select>"
);
//--------------------------CHAPTER 14-16 end----------------------


//------------------------CHAPTER 17-20 start-------------------------
// task 1)
var mulArray=[[,],[,],[,]];

// task 2)
var mulArray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
alert(mulArray[0] + "\n" + mulArray[1] + "\n" + mulArray[2]);

// task 3)
for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

// task 4)
var num = +prompt("enter a number to show its multiplication table");
var len = +prompt("enter desired length of table");
for (var i = 1; i <= len; i++) {
  document.write("<br>" + num + "*" + i + "=" + num * i);
}

// task 5)
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(
  "<br>element at index 0 is " +
    fruits[0] +
    "<br>element at index 1 is " +
    fruits[1] +
    "<br>element at index 2 is " +
    fruits[2] +
    "<br>element at index 3 is " +
    fruits[3] +
    "<br>element at index 4 is " +
    fruits[4]
);

// task 6)
document.write("counting:");
for (var i = 1; i <= 15; i++) {
  document.write(i + ",");
}
document.write("<br><br>reverse counting:");
for (var i = 10; i >= 1; i--) {
  document.write(i + ",");
}
document.write("<br><br>even:");
for (var i = 0; i <= 2; i++) {
  if (i % 2 === 0) {
    document.write(i + ",");
  }
}
document.write("<br><br>odd:");
for (var i = 0; i <= 2; i++) {
  if (i % 2 !== 0) {
    document.write(i + ",");
  }
}
document.write("<br><br>series:");
for (var i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + "k,");
  }
}

// task 7)
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var s = prompt("welcome to ABC bakery. what do you want to order?");
var c;
for (var i = 0; i < A.length; i++) {
  if (A[i] === s) {
    alert(s + " is available at index " + i + " in our bakery");
    c = 1;
  }
}
if (c != 1) {
  alert("we are sorry. " + s + " is not available in our bakery");
}

// task 8)
var A = [24, 53, 78, 91, 12];

var l = A.length - 1;
document.write("Array items: " + A);
A.sort();
document.write("<br>The largest number is " + A[l]);

// task 9)
var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A);
A.sort();
document.write("<br>The smallest number is " + A[0]);

// task 10)
for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + ",");
  }
}

//-----------------------------CHAPTER 17-20 end------------------------------------*/
