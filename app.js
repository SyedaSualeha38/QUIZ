// 1. Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.

function reverses() {
    return arr.filter(num => num >= 0);
}
let arr = [1,2,3,4,5]
console.log(reverses(arr));

// 2. Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan,
// it’ll remove the negative numbers. This is another example of a task that’ll be  useful when combing through data and looking for clever ways to eliminate “bad data.”


function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

let arr3 = [-1, 2, -3, 4, -5];
console.log(filterNegativeNumbers(arr3));

// 3. Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of
// a dataset. If you use JavaScript later in your career, you’ll be well-prepared  to determine what datasets (or just strings) consist of. 

function countVowels(str) {
    str = str.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    
    for (let char of str) {
        
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
console.log(countVowels("Hello")); // Output: 2 (e, o are vowels)
console.log(countVowels("Testing")); // Output: 2 (e, i are vowels)


// 4. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”).
// Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly.

function isPalindrome(str) {
  
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  
    return cleanStr === cleanStr.split('').reverse().join('');
}


console.log(isPalindrome("radar")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal, Panama")); 


// 5. Write a JavaScript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return true if either of them falls within the range.

function isInRange50to99(num1, num2) {
   
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

// Example usage:
console.log(isInRange50to99(45, 55)); 
console.log(isInRange50to99(30, 99)); 
console.log(isInRange50to99(20, 30)); 


// 6. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.

function minMappedValue(arr, mapFunc) {
    const mappedValues = arr.map(mapFunc);
    return Math.min(...mappedValues);
}


function square(num) {
    return num * num;
}


let arr4 = [1, 2, 3, 4, 5];
console.log(minMappedValue(arr4, square)); 

// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.


function fourCopiesOfLastThree(str) {
    if (str.length >= 3) {
        const lastThree = str.slice(-3);
        return lastThree.repeat(4);
    } else {
        return "String length must be 3 and above.";
    }
}


let str5 = "JavaScript";
console.log(fourCopiesOfLastThree(str5)); 

// 8. Write a JavaScript program to find the types of a given angle. 
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle. Angle should be between 0 and 180 degrees.";
    }
}
// Example usage:
console.log(angleType(45));  
console.log(angleType(90));   
console.log(angleType(120)); 
console.log(angleType(180));  
console.log(angleType(200));  

// 9. Write a JavaScript program to find the smallest round number not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros. So,
//  590 is rounder than 592, but 590 is less round than 600.


function smallestRoundNumber(value) {
    while (value % 10 !== 0) {
        value++;
    }
    return value;
}


console.log(smallestRoundNumber(590)); 
console.log(smallestRoundNumber(592));


// 10. Write a JavaScript program to find the index of an array item in a for loop

function findIndex(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1; 
}


let arr6 = [10, 20, 30, 40, 50];
console.log(findIndex(arr6, 30));
console.log(findIndex(arr6, 100)); 
