/**
 * Exercicio 1 - Colocarem pessoas na fila, tirarem da fila e verem como a fila fica.
 */
class Queue {
  constructor() {
    this.fila = [];
  }

  get length() {
    return this.fila.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(item) {
    this.fila.push(item);
  }

  dequeue() {
    this.fila.shift();
  }

  peek() {
    return this.fila[0];
  }
}

const queue = new Queue();
queue.enqueue('Ana');
queue.enqueue('Julia');
queue.enqueue('Pedro');
console.log(queue.peek());