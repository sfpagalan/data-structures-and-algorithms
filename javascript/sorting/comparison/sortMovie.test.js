"use strict";

const { Movie, sortByYear, sortByTitle } = require('./sortMovie.js');

const movies = [
  new Movie("Spirited Away", 2001, ["Fantasy"]),
  new Movie("My Neighbor Totoro", 1988, ["Fantasy"]),
  new Movie("Princess Mononoke", 1997, ["Fantasy"]),
  new Movie("Howl's Moving Castle", 2004, ["Fantasy"]),
  new Movie("Castle in the Sky", 1986, ["Adventure"]),
  new Movie("Kiki's Delivery Service", 1989, ["Fantasy"])
];

  describe("sortByYear", () => {
    it("Sorts Studio Ghibli movies by year", () => {
      const sorted = sortByYear(movies);
      expect(sorted).toEqual([
        new Movie("Howl's Moving Castle", 2004, ["Fantasy"]),
        new Movie("Spirited Away", 2001, ["Fantasy"]),
        new Movie("Princess Mononoke", 1997, ["Fantasy"]),
        new Movie("Kiki's Delivery Service", 1989, ["Fantasy"]),
        new Movie("My Neighbor Totoro", 1988, ["Fantasy"]),
        new Movie("Castle in the Sky", 1986, ["Adventure"])
      ])
    })
  })

  describe("sortByTitle", () => {
    it("Sorts Studio Ghibli movies by title", () => {
      const sorted = sortByTitle(movies);
      expect(sorted).toEqual([
        new Movie("Castle in the Sky", 1986, ["Adventure"]),
        new Movie("Howl's Moving Castle", 2004, ["Fantasy"]),
        new Movie("Kiki's Delivery Service", 1989, ["Fantasy"]),
        new Movie("My Neighbor Totoro", 1988, ["Fantasy"]),
        new Movie("Princess Mononoke", 1997, ["Fantasy"]),
        new Movie("Spirited Away", 2001, ["Fantasy"])
      ]);
    });
  });

  test('Alerts for duplicate movies', () => {
    const movies = [
      new Movie("Spirited Away", 2001, ["Fantasy"]),
      new Movie("Spirited Away", 2001, ["Fantasy"])
    ];
    const duplicateChecker = (arr) => {
      const titles = arr.map(movie => movie?.title);
      const hasDuplicates = titles.some((val, i) => titles.indexOf(val) !== i);
      if (hasDuplicates) {
        throw new Error('Duplicate movies found');
      }
    }
    expect(() => {
      duplicateChecker(movies);
      movies.sort(sortByYear);
    }).toThrow('Duplicate movies found');

    expect(() => {
      duplicateChecker(movies);
      movies.sort(sortByTitle);
    }).toThrow('Duplicate movies found');
  });

