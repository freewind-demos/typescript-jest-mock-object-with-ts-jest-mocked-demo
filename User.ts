export default class User {
  constructor(public name: string) {
  }

  hello(): string {
    return `Hello from ${this.name}`;
  }
}
