export default class User {

  private age: number = 222;

  constructor(public name: string) {
  }

  hello(): string {
    return `Hello from ${this.name}`;
  }
}
