// Returns an array of printable ASCII characters
function generateAsciiChars(start, end) {
  if (start > end) {
    return [];
  }

  const myArray = generateAsciiChars(start+1, end);
  myArray.push(String.fromCharCode(start));
  return myArray;
}

// This method generates a random password
// using recursion.
function generatePassword(num, passwordLength) {
  if (num >= passwordLength) {
    return [];
  }

  // Generate a random number array using recursion
  const myArray = generatePassword(num+1, passwordLength);
  const randomNumber = Math.floor(Math.random() * (CHARS.length+1));
  myArray.push(CHARS[randomNumber]);

  return myArray;
}

// An array of printable ASCII characters.
const CHARS = generateAsciiChars(32, 127);
max = 32;
min = 24;

// Random set a password length between min and max
const passwordLength = Math.floor(Math.random() * (max - min + 1)) + min;

// Start the password generator
const randomNumberArray = generatePassword(0, passwordLength);
console.log(`\n\nYour suggested password is:\n\n${randomNumberArray.toString().split(',').join('')}`);
