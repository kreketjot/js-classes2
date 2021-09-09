import Magician from '../Magician';

let character;
beforeEach(() => { character = new Magician('Kate'); });

test('Magician name', () => expect(character.name).toBe('Kate'));
test('Magician type', () => expect(character.type).toBe('Magician'));
test('Magician health', () => expect(character.health).toBe(100));
test('Magician level', () => expect(character.level).toBe(1));
test('Magician attack', () => expect(character.attack).toBe(10));
test('Magician defence', () => expect(character.defence).toBe(40));
test.each([
  [1, 10],
  [11, 0],
  [2, 9],
  [6, 5],
  [3, 8],
])('Magician debuff attack without stoned effect', (distance, attack) => {
  character.distance = distance;
  expect(character.attack).toBeCloseTo(attack);
});

test.each([
  [1, 10],
  [11, 0],
  [2, 4],
  [6, 0],
  [3, 0.075],
])('Magician debuff attack with stoned effect', (distance, attack) => {
  character.distance = distance;
  character.stoned = true;
  expect(character.attack).toBeCloseTo(attack);
});
