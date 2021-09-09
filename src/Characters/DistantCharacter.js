/* eslint-disable no-underscore-dangle */
import Character from './Character';

export default class DistantCharacter extends Character {
  constructor(...params) {
    super(...params);
    this.stoned = false;
    this.distance = 1; // should be set before attack
  }

  set attack(attack) {
    this._attack = attack;
  }

  get attack() {
    const coef = (11 - this.distance) / 10; // distance 11 => 0 attack
    let attack = this._attack * coef;
    attack -= this.stoned * Math.log2(this.distance) * 5;
    attack = attack.roundNumber();
    return attack < 0 ? 0 : attack;
  }
}
