const validateBrackets = require('../code-challenges/Brackets');

describe('validateBrackets', () => {
  test('should return true for balanced brackets', () => {
    expect(validateBrackets("{}")).toBe(true);
    expect(validateBrackets("{}(){}")).toBe(true);
    expect(validateBrackets("()[[One Piece Characters]]")).toBe(true);
    expect(validateBrackets("(){}[Luffy]")).toBe(true);
    expect(validateBrackets("{}{Nakama}[Sunny](Going Merry))")).toBe(true);
  });

  test('should return false for unbalanced brackets', () => {
    expect(validateBrackets("[({}]")).toBe(false);
    expect(validateBrackets("(](")).toBe(false);
    expect(validateBrackets("{(})")).toBe(false);
  });

  test('should handle other characters gracefully', () => {
    expect(validateBrackets("Hello (Straw Hat Pirates)")).toBe(true);
    expect(validateBrackets("Hello [Devil Fruits]")).toBe(true);
    expect(validateBrackets("Hello {Marine Admirals}")).toBe(true);
    expect(validateBrackets("No brackets here in One Piece!")).toBe(true);
  });
});
