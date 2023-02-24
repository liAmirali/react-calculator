export class Stack<T> {
  values: T[];

  constructor() {
    this.values = [];
  }

  push(item: T) {
    this.values.push(item);
  }

  pop() {
    return this.values.pop();
  }

  top() {
    if (this.size() === 0) return undefined;

    return this.values[this.size() - 1];
  }

  size() {
    return this.values.length;
  }
}
