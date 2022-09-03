// 1.REVERSE A STRING
function reverseString(str){

    return str.split("").reverse("").join("");

}
console.log(reverseString("hello"));
console.log('----------------------1');

// 2. VALIDATE A PALINDROME

function isPalindrome(palindrome) {
  let reversPalindrome = palindrome.toLowerCase().split("").reverse().join("");
  return reversPalindrome === palindrome;
}
console.log(isPalindrome(`racecar`));
console.log(isPalindrome("hello"));
console.log('------------------------------2');

// 3.REVERSE AN INTEGER

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

// 4.CAPITALIZE LETTERS

function capitalizeLetters(str) {
   let splitStr = str.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
      
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}


console.log(capitalizeLetters("i love javascript"));
console.log('-----------------------4');

// 5.MAX CHARACTER

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

// 6. FIZZBUZZ

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
console.log('------------------------6');

// 7.LONGEST WORD

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

// 8.ARRAY CHUNKING

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

// 9.FLATTEN ARRAY

let oldArray = [[1, 2], [3, 4], [5, 6], [7]];

let newArray = Array.prototype.concat.apply([], oldArray);

console.log(newArray);
console.log('---------------------------9');

// 10.ANAGRAM

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

// 11.ADD ALL NUMBERS

const sum = (...args) => args.reduce((a, b) => a + b);

console.log(sum(2, 5, 6, 7));
console.log('----------------------11');

// 12.SUM ALL PRIMES

function sumAllPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}
console.log(sumAllPrimes(10));
console.log('-----------------------12');

// 13.SEEK AND DESTROY

function seekAndDestroy(arr) {
  
  let sumValues = Array.prototype.slice.call(arguments); 
  
  sumValues.shift(); 
  
  return arr.filter(function(x) {
    
    return sumValues.indexOf(x) == -1;
  
  });
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));
console.log('------------------------13');

// 14.EVEN & ODD SUMS

let num = [50, 60, 60, 45, 71];

const evenOddSums = (num) => {
  
  let sumEven = 0;
  let sumOdd = 0;

  for (let i in num) {
    if (num[i] % 2 === 0){ 
    sumEven += num[i];
    } else if(num[i] % 2 === 1) {
      sumOdd += num[i];
    }
  }
  console.log([sumEven, sumOdd]);
}

evenOddSums([50, 60, 60, 45, 71]);
console.log('-------------------------14');
