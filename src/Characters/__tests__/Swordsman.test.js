import Swordsman from '../Swordsman';

const character = new Swordsman('Alice');

test('test Swordsman name', () => expect(character.name).toBe('Alice'));
test('test Swordsman type', () => expect(character.type).toBe('Swordsman'));
test('test Swordsman health', () => expect(character.health).toBe(100));
test('test Swordsman level', () => expect(character.level).toBe(1));
test('test Swordsman attack', () => expect(character.attack).toBe(40));
test('test Swordsman defence', () => expect(character.defence).toBe(10));
