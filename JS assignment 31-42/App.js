// date time
var date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);

///Current Month

var currentDate = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date = new Date();
var Day = date.getDay();
var Today = dayNames[Day];
document.write(currentDate)

var currentDate = new Date();
var currentMonth = currentDate.getMonth();

var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
var currentMonthName = monthNames[currentMonth];
alert("Current month: " + currentMonthName);

var currentDate = new Date();
var currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
var firstThreeLetters = currentDay.slice(0, 3);
alert("First three letters of the current day: " + firstThreeLetters);

var currentdate = new Date();
var currentDay = currentdate.getDay();
if (currentDay === 6 || currentDay === 0) {
    alert("it's fun day")
} else {
    alert("its not funday today")
}

var currentdate = new Date();
var currentDay = currentdate.getDay();
if (currentDay < 16) {
    alert("first fifteen days of the month")
} else {
    alert("last days of the month")
}

///Question Number 06

// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

 var d = new Date();
var cart = d.getTime();
document.write(cart)

var currentTime = new Date();
var currentHour = currentTime.getHours();
if (currentHour < 12) {
    alert("its AM")
} else {
    alert("its PM")
}


////question 8


var laterDate = new Date(2020, 11, 31)
document.write("lateDate:" + laterDate)


// alert("K-Electric Bill" + daysPassed);

//question 09

var ddate = new Date(2015, 5, 18);
var currentDate = new Date();
var timeDifference = currentDate.getTime() - ddate.getTime();
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

var date = new Date(2016, 7, 12);
var refrenceDate = new Date(2015, 0, 1);
var timeDifference = refrenceDate.getTime() - date.getTime();

var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);

var name = prompt("enter your Name")
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var birthYear = currentYear - age;
// document.write("your Name is:" + name);

var age = prompt("Age")
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var birthYear = currentYear - age;
// alert("your Age is :" + age);

function generateBill() {

    var customerName = prompt("Enter customer name:");
    var currentMonth = prompt("Enter current month:");
    var numberOfUnits = parseFloat(prompt("Enter number of units:"));
    var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
    var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

    var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
    var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

    document.write("Customer Name: " + customerName);
    document.write("<br>")
    document.write("Current Month: " + currentMonth);
    document.write("<br>")

    document.write("Number of Units: " + numberOfUnits.toFixed(2));
    document.write("<br>")

    document.write("Charges per Unit: " + chargesPerUnit.toFixed(2));
    document.write("<br>")

    document.write("Net Amount Payable (within Due Date): " + netAmountPayable);
    document.write("<br>")

    document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
    document.write("<br>")

    document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable);
}
generateBill();

////////////////////////////
function dateTime() {
    var currentDate = new Date();
    var datetime = currentDate.toLocaleString()
    document.write(datetime)
}
dateTime()

function firstLastname() {
    var firstName = prompt("enter your 1st name")
    var lastName = prompt("enter last name")
    var greet = (firstName + " " + lastName)
    document.write(greet)
}
firstLastname();

function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var sum = num1 + num2;
    return sum;
}
var result = addNumbers();
alert("The sum of the two numbers is: " + result);

const operator = prompt("Enter Operetor (either +, -, * or /):");
const number1 = (prompt("Enter value"));
const number2 = (prompt("Enter value"));

function add() {
    let sum = number1 + number2;
    return sum
}
function sub() {
    let min = number1 - number2;
    return min
}
function mul() {
    let multiply = number1 * number2;
    return multiply;
}
function div() {
    let divide = number1 / number2;
    return divide;
}
let val = 0;

if (operator == "+") {
    val = add(number1, number2);
}
else if (operator == "-") {
    val = sub(number1, number2);
}
else if (operator == "*") {
    val = mul(number1, number2)
}
else if (operator == "/") {
    val = div(number1, number2);
}

document.write("value 01: " + number1 + " value 02: " + number2 + " RESULT: " + val)



function square(number) {
    return number * number;
}
let results = square(4);
document.write(results)

function func() {
    function fact(num) {
        if (num < 0) {
            return -1;
        }
        else if (num == 0) {
            return 1;
        }
        else {
            let result = 1;
            for (var i = num; i > 1; i--) {
                result *= i;
            };
            return result;
        }
    };
    const num = 4;
    document.getElementById("para").innerHTML = fact(num);
};


function factorial(n) {
    if (n = 0) {
        return 1
    }
    else {
        return factorial(n - 1) * n
    }
}
document.write(factorial(10))



// Function and Sitch and while.. Do-While
//01
function power(a, b) {
    var result = Math.pow(a, b);
    console.log(result)
  }
  power(4,2)

  //02
  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
////03
function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }

  
  ///04
  function calculateAverage(marks) {
    var totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    var average = totalMarks / marks.length;
   console. log ();
  }
  
  function calculatePercentage(marks) {
    var totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    var totalPossibleMarks = marks.length * 100;
    var percentage = (totalMarks / totalPossibleMarks) * 100;
    return percentage;
  }
  
  function mainFunction(subject1, subject2, subject3) {
    var marks = [subject1, subject2, subject3];
    var average = calculateAverage(marks);
    var percentage = calculatePercentage(marks);
    return [average, percentage];
  }

  ///05

  function customIndexOf(string, character) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === character) {
        return i;
      }
    }
    return -1;
  }

  //06
  function removeVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i].toLowerCase())) {
        result += sentence[i];
      }
    }
    console.log(result);
  }
removeVowels("lorem ")
  //07
  
   