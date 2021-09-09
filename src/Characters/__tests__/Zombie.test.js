import Zombie from '../Zombie';

const character = new Zombie('Chloe');

test('test Zombie name', () => expect(character.name).toBe('Chloe'));
test('test Zombie type', () => expect(character.type).toBe('Zombie'));
test('test Zombie health', () => expect(character.health).toBe(100));
test('test Zombie level', () => expect(character.level).toBe(1));
test('test Zombie attack', () => expect(character.attack).toBe(40));
test('test Zombie defence', () => expect(character.defence).toBe(10));
