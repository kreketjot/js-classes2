import Daemon from '../Daemon';

const character = new Daemon('Jan');

test('test Daemon name', () => expect(character.name).toBe('Jan'));
test('test Daemon type', () => expect(character.type).toBe('Daemon'));
test('test Daemon health', () => expect(character.health).toBe(100));
test('test Daemon level', () => expect(character.level).toBe(1));
test('test Daemon attack', () => expect(character.attack).toBe(10));
test('test Daemon defence', () => expect(character.defence).toBe(40));
