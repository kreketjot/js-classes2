import DistantCharacter from './DistantCharacter';

export default class Magician extends DistantCharacter {
  constructor(name) {
    super(name, 'Magician', 100, 1, 10, 40);
  }
}
