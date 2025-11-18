// Function 1: calculateTax
function calculateTax(amount) {
  return amount * 0.10; // 10% tax
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Function 4: isPalindrome
function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}

// Example usage:
console.log(calculateTax(200)); // 20
console.log(convertToUpperCase("hello")); // "HELLO"
console.log(findMaximum(5, 10)); // 10
console.log(isPalindrome("racecar")); // true
console.log(calculateDiscountedPrice(100, 20)); // 80
