const businessTrip = require('./BusinessTrip.js');

const onePieceGraph = {
    "Water 7": {"Enies Lobby": 300, "Thriller Bark": 200},
    "Enies Lobby": {"Water 7": 300, "Sabaody Archipelago": 400},
    "Thriller Bark": {"Water 7": 200, "Fishman Island": 550},
    "Sabaody Archipelago": {"Enies Lobby": 400, "Fishman Island": 230},
    "Fishman Island": {"Thriller Bark": 550, "Sabaody Archipelago": 230}
};

test('Trip from Water 7 to Enies Lobby', () => {
    expect(businessTrip(onePieceGraph, ["Water 7", "Enies Lobby"])).toBe(300);
});

test('Multi-stop trip from Enies Lobby to Fishman Island via Sabaody Archipelago', () => {
    expect(businessTrip(onePieceGraph, ["Enies Lobby", "Sabaody Archipelago", "Fishman Island"])).toBe(630);
});

test('Impossible trip from Fishman Island to Enies Lobby', () => {
    expect(businessTrip(onePieceGraph, ["Fishman Island", "Enies Lobby"])).toBeNull();
});
