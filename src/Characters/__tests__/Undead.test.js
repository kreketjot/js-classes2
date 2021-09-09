import Undead from '../Undead';

const character = new Undead('Bob');

test('test Undead name', () => expect(character.name).toBe('Bob'));
test('test Undead type', () => expect(character.type).toBe('Undead'));
test('test Undead health', () => expect(character.health).toBe(100));
test('test Undead level', () => expect(character.level).toBe(1));
test('test Undead attack', () => expect(character.attack).toBe(25));
test('test Undead defence', () => expect(character.defence).toBe(25));
