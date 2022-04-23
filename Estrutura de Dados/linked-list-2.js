/**
 * Abrir o site https://pythontutor.com/javascript.html, 
 * coloque a implementação lá e descreva ou resuma o que vc entendeu
 */
class Node {
  constructor(value) {
    // ao criar um nó, passaremos o valor para o construtor e inicializaremos o ponteiro com
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      //existe somente um nó na lista e vamos remove-lo
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;

      return nodeToRemove;
    } else {
      // existem vamos nós na lista

      // inicia o ponteiro na cabeã
      let currentNode = this.head;
      // removemos o ultimo nó da lista
      let nodeToRemove = this.tail;
      // essa passa a ser a nova cauda
      let secondToLastNode;

      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }

      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;

      return nodeToRemove;
    }
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      // a lista tem pelo menos um nó

      // Se a lista não estiver vazia, 
      //devemos primeiro definir o ponteiro do nó final 
      // atual para o novo nó.
      // Então podemos definir `this.tail`
      // para o novo nó e incrementar o comprimento da lista
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  get(value) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let currentNode = this.head;
    let interator = 0;
    while (interator < index) {
      interator++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

const list = new LinkedList();

list.push(5);
list.push(8);
list.push(10);
list.add(1);
list.get(list);
