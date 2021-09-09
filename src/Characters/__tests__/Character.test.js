import Character from '../Character';

const character = new Character('Max', 'Undead', 100, 1, 13, 17);

test('test Character name', () => expect(character.name).toBe('Max'));
test('test Character type', () => expect(character.type).toBe('Undead'));
test('test Character health', () => expect(character.health).toBe(100));
test('test Character level', () => expect(character.level).toBe(1));
test('test Character attack', () => expect(character.attack).toBe(13));
test('test Character defence', () => expect(character.defence).toBe(17));
test('test wrong Character name', () => expect(() => new Character(1, 'Bowerman', 1, 1, 1, 1)).toThrow('min name lenght is 2, max is 10'));
test('test wrong Character type', () => expect(() => new Character('Ram', 'Bow', 1, 1, 1, 1)).toThrow('is unsupported type'));
test('damage Character', () => {
  character.damage(3);
  expect(character.health).toBeCloseTo(97.51);
});
test('test wrong damage applied to Character', () => expect(() => character.damage(-2)).toThrow('damage should be > 0'));
test('Character level after upgrade', () => {
  const hero = new Character('Ram', 'Swordsman', 42.3423, 1, 13, 17);
  hero.levelUp();
  expect(hero.level).toBe(2);
});
test('Character health after upgrade', () => {
  character.levelUp();
  expect(character.health).toBe(100);
});
test('Character attack after upgrade', () => {
  const hero = new Character('Ram', 'Swordsman', 42.3423, 1, 13, 17);
  hero.levelUp();
  expect(hero.attack).toBeCloseTo(15.6);
  expect(hero.defence).toBeCloseTo(20.4);
});
test('Character defence after upgrade', () => {
  const hero = new Character('Ram', 'Swordsman', 42.3423, 1, 13, 17);
  hero.levelUp();
  expect(hero.defence).toBeCloseTo(20.4);
});
test('kill Character', () => {
  character.damage(10000);
  expect(character.health).toBe(0);
});
test('upgrade dead Character', () => expect(() => character.levelUp()).toThrow('unable to upgrade dead character'));
