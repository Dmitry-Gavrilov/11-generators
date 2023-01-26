class Team {
  constructor() {
    this.char = [
      {
        name: 'Bowman',
        health: 50,
        level: 1,
        type: 'Bowman',
        attack: 25,
        defence: 25,
      },
      {
        name: 'Swordsman',
        health: 50,
        level: 1,
        type: 'Swordsman',
        attack: 40,
        defence: 10,
      },
      {
        name: 'Undead',
        health: 50,
        level: 1,
        type: 'Undead',
        attack: 10,
        defence: 40,
      },
      {
        name: 'Magician',
        health: 50,
        level: 1,
        type: 'Magician',
        attack: 25,
        defence: 25,
      },
      {
        name: 'Zombie',
        health: 50,
        level: 1,
        type: 'Zombie',
        attack: 40,
        defence: 10,
      },
      {
        name: 'Daemon',
        health: 50,
        level: 1,
        type: 'Daemon',
        attack: 20,
        defence: 20,
      },
    ];
  }

  * [Symbol.iterator]() {
    let current = 0;
    const last = this.char.length - 1;

    while (current <= last) {
      yield this.char[current];
      current += 1;
    }
  }
}

/*
const team = new Team();

for (const player of team) {
  console.log(player);
}
*/
