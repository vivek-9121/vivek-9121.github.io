// Vivek Sirikonda
// ITMD 541-01 Graduate Student

// Exercise #1: Min, Max, Average Function
function minMaxAverage(numbers) {
    let total = numbers.length;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let avg = numbers.reduce((sum, num) => sum + num, 0) / total;
    console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

// Test cases for minMaxAverage
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([15, 22, 8, 19, 31, 7, 3]);

// Exercise #2: Count Vowels Function
function countVowels(word) {
    let vowelCount = word.match(/[aeiou]/gi)?.length || 0;
    console.log(`${word}: ${vowelCount} vowels`);
}

// Test cases for countVowels
countVowels("Winter");
countVowels("Hello");
countVowels("Programming");

// Exercise #3: Sort Numbers Function
function sortNumbers(numbers) {
    let sorted = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: [${numbers}] Sorted Array: [${sorted}]`);
}

// Test cases for sortNumbers
sortNumbers([9, 4, 6, 2]);
sortNumbers([15, 3, 22, 8, 19]);
sortNumbers([100, 50, 75, 25, 10]);

// Exercise #4: Celsius to Fahrenheit Function (Enhanced to handle string input)
function celsiusToFahrenheit(celsius) {
    let numCelsius = parseFloat(celsius);
    if (isNaN(numCelsius)) {
        console.log("Invalid input: Please enter a valid number.");
        return;
    }
    let fahrenheit = (numCelsius * 9 / 5) + 32;
    console.log(`${numCelsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases for celsiusToFahrenheit (including string inputs)
celsiusToFahrenheit(30);
celsiusToFahrenheit("0");
celsiusToFahrenheit("-10");
celsiusToFahrenheit("35");
celsiusToFahrenheit("abc"); // Invalid input test

// Exercise #5: Sort and Introduce People Function
function sortAndIntroducePeople(people) {
    return people.sort((a, b) => a.age - b.age)
                 .map(person => `${person.name} is ${person.age} and from ${person.city}`);
}

// Test cases for sortAndIntroducePeople
let testPeople1 = [
    {name: 'Alice', age: 25, city: 'New York'},
    {name: 'Bob', age: 20, city: 'Los Angeles'},
    {name: 'Charlie', age: 30, city: 'Chicago'},
    {name: 'David', age: 22, city: 'Houston'},
    {name: 'Eve', age: 28, city: 'Seattle'}
];

let testPeople2 = [
    {name: 'Frank', age: 40, city: 'Miami'},
    {name: 'Grace', age: 35, city: 'Denver'},
    {name: 'Hank', age: 50, city: 'Boston'},
    {name: 'Ivy', age: 45, city: 'San Francisco'},
    {name: 'Jack', age: 38, city: 'Austin'}
];

console.log(sortAndIntroducePeople(testPeople1));
console.log(sortAndIntroducePeople(testPeople2));

