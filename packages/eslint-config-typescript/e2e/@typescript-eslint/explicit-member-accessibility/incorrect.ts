class Animal {
  animalName: string; // No accessibility modifier

  constructor(name: string) {
    // No accessibility modifier
    this.animalName = name;
  }

  get name(): string {
    // No accessibility modifier
    return this.animalName;
  }

  set name(value: string) {
    // No accessibility modifier
    this.animalName = value;
  }

  walk() {
    // method
  }
}

new Animal("duck");
