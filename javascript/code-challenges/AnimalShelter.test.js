const { expect } = require('chai');
const OnePieceAnimalShelter = require('../code-challenges/AnimalShelter');

describe('OnePieceAnimalShelter', () => {
  it('should enqueue and dequeue animals correctly', () => {
    const animalShelter = new OnePieceAnimalShelter();

    // Enqueue some animals
    animalShelter.enqueue({ species: "dog", name: "Zunesha" });
    animalShelter.enqueue({ species: "cat", name: "Laboon" });
    animalShelter.enqueue({ species: "dog", name: "Lord of the Coast" });

    // Dequeue animals and test the outputs
    const dog1 = animalShelter.dequeue("dog");
    const cat1 = animalShelter.dequeue("cat");
    const bird = animalShelter.dequeue("bird");
    const dog2 = animalShelter.dequeue("dog");

    expect(dog1).to.deep.equal({ species: 'dog', name: 'Zunesha', order: 0 });
    expect(cat1).to.deep.equal({ species: 'cat', name: 'Laboon', order: 1 });
    expect(bird).to.equal(null);
    expect(dog2).to.deep.equal({ species: 'dog', name: 'Lord of the Coast', order: 2 });
  });

  it('should handle enqueuing and dequeuing only dogs', () => {
    const animalShelter = new OnePieceAnimalShelter();

    animalShelter.enqueue({ species: "dog", name: "Ace" });
    animalShelter.enqueue({ species: "dog", name: "Chopper" });
    animalShelter.enqueue({ species: "dog", name: "Franky" });

    const dog1 = animalShelter.dequeue("dog");
    const dog2 = animalShelter.dequeue("dog");
    const dog3 = animalShelter.dequeue("dog");

    expect(dog1).to.deep.equal({ species: 'dog', name: 'Ace', order: 0 });
    expect(dog2).to.deep.equal({ species: 'dog', name: 'Chopper', order: 1 });
    expect(dog3).to.deep.equal({ species: 'dog', name: 'Franky', order: 2 });
    expect(animalShelter.dequeue("dog")).to.equal(null);
  });

  it('should handle enqueuing and dequeuing only cats', () => {
    const animalShelter = new OnePieceAnimalShelter();

    animalShelter.enqueue({ species: "cat", name: "Nami" });
    animalShelter.enqueue({ species: "cat", name: "Robin" });
    animalShelter.enqueue({ species: "cat", name: "Usopp" });

    const cat1 = animalShelter.dequeue("cat");
    const cat2 = animalShelter.dequeue("cat");
    const cat3 = animalShelter.dequeue("cat");

    expect(cat1).to.deep.equal({ species: 'cat', name: 'Nami', order: 0 });
    expect(cat2).to.deep.equal({ species: 'cat', name: 'Robin', order: 1 });
    expect(cat3).to.deep.equal({ species: 'cat', name: 'Usopp', order: 2 });
    expect(animalShelter.dequeue("cat")).to.equal(null);
  });

  it('should handle mixed enqueuing and dequeuing', () => {
    const animalShelter = new OnePieceAnimalShelter();

    animalShelter.enqueue({ species: "dog", name: "Sanji" });
    animalShelter.enqueue({ species: "cat", name: "Luffy" });
    animalShelter.enqueue({ species: "cat", name: "Zoro" });
    animalShelter.enqueue({ species: "dog", name: "Nami" });

    const dog1 = animalShelter.dequeue("dog");
    const cat1 = animalShelter.dequeue("cat");
    const dog2 = animalShelter.dequeue("dog");
    const cat2 = animalShelter.dequeue("cat");

    expect(dog1).to.deep.equal({ species: 'dog', name: 'Sanji', order: 0 });
    expect(cat1).to.deep.equal({ species: 'cat', name: 'Luffy', order: 1 });
    expect(dog2).to.deep.equal({ species: 'dog', name: 'Nami', order: 3 });
    expect(cat2).to.deep.equal({ species: 'cat', name: 'Zoro', order: 2 });
    expect(animalShelter.dequeue("dog")).to.equal(null);
    expect(animalShelter.dequeue("cat")).to.equal(null);
  });
});
