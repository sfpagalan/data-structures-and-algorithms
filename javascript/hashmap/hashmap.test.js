const HashMap = require('./hashmap.js');

describe('HashMap', () => {
  it('should return "a" when the first repeated word is "a"', () => {
    const map = new HashMap();
    expect(map.repeatedWord("Once upon a time, there was a brave princess who...")).toBe("a");
  });

  it('should return "it" when the first repeated word is "it"', () => {
    const map = new HashMap();
    const longStr = "It was the best of times, it was the worst of times, ... (abbreviated)";
    expect(map.repeatedWord(longStr)).toBe("it");
  });

  it('should return "summer" when the first repeated word is "summer"', () => {
    const map = new HashMap();
    expect(map.repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs...")).toBe("summer");
  });
});
