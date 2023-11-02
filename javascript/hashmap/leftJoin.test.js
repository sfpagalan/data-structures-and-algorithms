const leftJoin = require('./leftJoin.js');

test('Straw Hats joining forces with allies', () => {
    let grandLineAllies = new Map();
    grandLineAllies.set('Alabasta', 'Vivi');
    grandLineAllies.set('Water 7', 'Franky');
    grandLineAllies.set('Dressrosa', 'Rebecca');
    grandLineAllies.set('Skypiea', 'Gan Fall');
    grandLineAllies.set('Fishman Island', 'Jinbei');

    let newWorldEnemies = new Map();
    newWorldEnemies.set('Alabasta', 'Crocodile');
    newWorldEnemies.set('Water 7', 'CP9');
    newWorldEnemies.set('Dressrosa', 'Doflamingo');
    newWorldEnemies.set('Skypiea', 'Enel');
    newWorldEnemies.set('Fishman Island', 'Hody Jones');

    let expectedJourney = [
        ['Alabasta', 'Vivi', 'Crocodile'],
        ['Water 7', 'Franky', 'CP9'],
        ['Dressrosa', 'Rebecca', 'Doflamingo'],
        ['Skypiea', 'Gan Fall', 'Enel'],
        ['Fishman Island', 'Jinbei', 'Hody Jones']
    ];

    expect(leftJoin(grandLineAllies, newWorldEnemies)).toEqual(expectedJourney);
});

test('Straw Hats sailing with no opposition', () => {
    let grandLineAllies = new Map();
    grandLineAllies.set('Enies Lobby', 'Robin');

    let newWorldEnemies = new Map();

    let expectedJourney = [
        ['Enies Lobby', 'Robin', 'NULL']
    ];

    expect(leftJoin(grandLineAllies, newWorldEnemies)).toEqual(expectedJourney);
});

test('Sailing through the calm belt with no adventure', () => {
    let grandLineAllies = new Map();
    let newWorldEnemies = new Map();

    expect(leftJoin(grandLineAllies, newWorldEnemies)).toEqual([]);
});
