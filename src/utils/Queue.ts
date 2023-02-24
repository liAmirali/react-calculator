export class Queue<T> {
  values: T[];

  constructor() {
    this.values = [];
  }

  enqueue(item: T) {
    this.values.push(item);
  }

  dequeue() {
    return this.values.shift();
  }

  top() {
    if (this.size() === 0) return undefined;

    return this.values[this.size() - 1];
  }

  size() {
    return this.values.length;
  }
}
