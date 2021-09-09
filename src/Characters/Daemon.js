import DistantCharacter from './DistantCharacter';

export default class Daemon extends DistantCharacter {
  constructor(name) {
    super(name, 'Daemon', 100, 1, 10, 40);
  }
}
