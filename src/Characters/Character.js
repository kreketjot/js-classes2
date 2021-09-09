/* eslint-disable no-underscore-dangle */
const characterTypes = new Set([
  'Bowerman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
]);

// eslint-disable-next-line no-extend-native
Number.prototype.roundNumber = function f(fixed = 3) {
  return +this.toFixed(fixed);
};

export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.maxHealth = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  set name(name) {
    if (name.length > 1 && name.length < 11) {
      this._name = name;
    } else {
      throw new Error('min name lenght is 2, max is 10');
    }
  }

  get name() {
    return this._name;
  }

  set type(type) {
    if (characterTypes.has(type)) {
      this._type = type;
    } else {
      throw new Error(`${type} is unsupported type`);
    }
  }

  get type() {
    return this._type;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('unable to upgrade dead character');
    }
    this.level += 1;
    this.attack = (this.attack * 1.2).roundNumber();
    this.defence = (this.defence * 1.2).roundNumber();
    this.health = this.maxHealth;
  }

  damage(points) {
    if (points < 0) {
      throw new Error('damage should be > 0');
    }
    this.health -= (points * (1 - this.defence / 100)).roundNumber();
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
