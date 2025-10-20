// Function to determine if a year is a leap year

function isLeapYear(year) {
  // Check for leap year conditions
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}

let year;
let result;

year = 2024;
result = isLeapYear(year);
console.log(result); 

year = 2000;
result = isLeapYear(year);
console.log(result); 

year = 1900;
result = isLeapYear(year);
console.log(result);