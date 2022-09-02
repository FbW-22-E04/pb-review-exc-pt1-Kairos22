// 1.
function reverseString(str){

    return str.split("").reverse("").join("");

}
console.log(reverseString("hello"));
console.log('----------------------1');

// 2.
function isPalindrome(palindrome) {
  let reversPalindrome = palindrome.toLowerCase().split("").reverse().join("");
  return reversPalindrome === palindrome;
}
console.log(isPalindrome(`racecar`));
console.log(isPalindrome("hello"));
console.log('------------------------------2');

3.
function reversDigits(num)
{
    let rev_num = 0;
    while (num > 0)
    {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev_num;
}
console.log(reversDigits(521));
console.log('-------------------------3.1');
function reverseAnInteger(integer) {
  return +integer.toString().split("").reverse().join("");
}
console.log(reverseAnInteger(521));
console.log('--------------------------3.2');

// 4.
function capitalizeLetters(str) {
   let splitStr = str.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
      
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}


console.log(capitalizeLetters("i love javascript"));
console.log('-----------------------4');

// 5.
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }


  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
console.log(maxChar('javascript'));
console.log('------------------------------5');

// 6.
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
console.log('------------------------6');

// 7.
function findLongestWord(str) {
  
    const splStrArray = str.split(" ");
  
    const orderedArray = splStrArray.sort((a, b) => b.length - a.length)
  
    const longestWord2 = orderedArray[0]
  
    return longestWord2
}



console.log(findLongestWord("Hi there, my name is Brad"));
console.log("----------------7.1");




function findLongestWords(str){

    const splStrArray = str.split(" ");

    const longestWord = findLongestWord(str)

    const orderedArray = splStrArray.filter(a => a.length === longestWord.length);

    return orderedArray

}

console.log(findLongestWords("My name is Brad"));



console.log('--------------------------7.2');

function words(str){

    const splStrArray = str.split(" ");

    if(splStrArray.length > 1)

    return splStrArray;

    else return str;

}

console.log(words("brad"));


console.log(words("My name is brad"));
console.log('--------------------------7.3');

// 8.
function chunkArray(arr, len) {

    const chunkArray = [];
    let i = 0;
    while (i < arr.length){
        chunkArray.push(arr.slice(i, i + len));
        i += len;
    }
    return chunkArray;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
console.log('-------------------------8');

// 9.
let oldArray = [[1, 2], [3, 4], [5, 6], [7]];

let newArray = Array.prototype.concat.apply([], oldArray);

console.log(newArray);
console.log('---------------------------9');

// 10.
function checkAnagrams(str1, str2){

  var newstr1 = str1.toLowerCase().split('').sort().join();
  var newstr2 = str2.toLowerCase().split('').sort().join();

  if(newstr1 == newstr2){
    console.log("String is Anagrams");
  }
  else{
    console.log("String is Not Anagrams");
  }

}
checkAnagrams("elbow", "below");

checkAnagrams("Dormitory", "dirtyroom");
console.log('-----------------------------10');

// 11.
const sum = (...args) => args.reduce((a, b) => a + b);

console.log(sum(2, 5, 6, 7));