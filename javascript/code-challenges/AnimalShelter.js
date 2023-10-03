'use strict';

class OnePieceAnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this.order = 0;
  }

  enqueue(animal) {
    if (animal.species === "dog") {
      this.dogQueue.push({ ...animal, order: this.order });
    } else if (animal.species === "cat") {
      this.catQueue.push({ ...animal, order: this.order });
    } else {
      throw new Error("Animal species must be 'dog' or 'cat'");
    }
    this.order++;
  }

  dequeue(pref) {
    if (pref === "dog") {
      if (this.dogQueue.length > 0) {
        return this.dogQueue.shift();
      }
    } else if (pref === "cat") {
      if (this.catQueue.length > 0) {
        return this.catQueue.shift();
      }
    }
    return null;
  }
}

const animalShelter = new OnePieceAnimalShelter();
animalShelter.enqueue({ species: "dog", name: "Zunesha" });
animalShelter.enqueue({ species: "cat", name: "Laboon" });
animalShelter.enqueue({ species: "dog", name: "Lord of the Coast" });

console.log(animalShelter.dequeue("dog")); // Output: { species: 'dog', name: 'Zunesha', order: 0 }
console.log(animalShelter.dequeue("cat")); // Output: { species: 'cat', name: 'Laboon', order: 1 }
console.log(animalShelter.dequeue("bird")); // Output: null
console.log(animalShelter.dequeue("dog")); // Output: { species: 'dog', name: 'Lord of the Coast', order: 2 }

module.exports = OnePieceAnimalShelter;
