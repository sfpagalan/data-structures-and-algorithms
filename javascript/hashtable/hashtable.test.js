const Hashtable = require('./hashtable.js');

describe('Hashtable', () => {
    let hashtable;

    beforeEach(() => {
        hashtable = new Hashtable();
    });

    test('set and get', () => {
        hashtable.set('apple', 1);
        expect(hashtable.get('apple')).toBe(1);
    });

    test('handle collisions', () => {
        hashtable.set('apple', 1);
        hashtable.set('ppale', 2);
        expect(hashtable.get('apple')).toBe(1);
        expect(hashtable.get('ppale')).toBe(2);
    });

    test('replace value for existing key', () => {
        hashtable.set('apple', 1);
        hashtable.set('apple', 2);
        expect(hashtable.get('apple')).toBe(2);
    });

    test('return null for nonexistent key', () => {
        expect(hashtable.get('apple')).toBe(null);
    });

    test('has method returns boolean', () => {
        hashtable.set('apple', 1);
        expect(hashtable.has('apple')).toBe(true);
        expect(hashtable.has('banana')).toBe(false);
    });

    test('keys method returns all unique keys', () => {
        hashtable.set('apple', 1);
        hashtable.set('banana', 2);
        hashtable.set('orange', 3);
        expect(hashtable.keys()).toEqual(expect.arrayContaining(['apple', 'banana', 'orange']));
    });

    test('hash method returns an in-range value', () => {
        const index = hashtable.hash('apple');
        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThan(hashtable.table.length);
    });
});
