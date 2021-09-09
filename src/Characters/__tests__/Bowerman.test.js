import Bowerman from '../Bowerman';

const character = new Bowerman('Denny');

test('test Bowerman name', () => expect(character.name).toBe('Denny'));
test('test Bowerman type', () => expect(character.type).toBe('Bowerman'));
test('test Bowerman health', () => expect(character.health).toBe(100));
test('test Bowerman level', () => expect(character.level).toBe(1));
test('test Bowerman attack', () => expect(character.attack).toBe(25));
test('test Bowerman defence', () => expect(character.defence).toBe(25));
