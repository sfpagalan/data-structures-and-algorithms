function validateBrackets(inputString) {
  const stack = [];
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let char of inputString) {
    if (bracketPairs[char] === undefined) {
      // if opening bracket, push onto the stack
      stack.push(char);
    } else {
      // if closing bracket, pop off the top element of the stack
      const topElement = stack.pop();
      if (bracketPairs[char] !== topElement) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(validateBrackets("{}")); // true
console.log(validateBrackets("{}(){}")); // true
console.log(validateBrackets("()[[Extra Characters]]")); // true
console.log(validateBrackets("(){}[[]]")); // true
console.log(validateBrackets("{}{Code}[Fellows](())")); // true
console.log(validateBrackets("[({}]")); // false
console.log(validateBrackets("(](")); // false
console.log(validateBrackets("{(})")); // false
