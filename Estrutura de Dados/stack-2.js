class Stack {
  constructor () {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length -1];
  }
}

const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('T');
const topo = stack.peek();
console.log(topo);
