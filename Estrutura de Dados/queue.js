class Queue {
  constructor() {
    this.items = [];
    this.front = null;
    this.back = null;
  }
  
  // busca o item que está na frente da fila
  getFront() {
    if (this.items.length != 0) {
      // busca o que ta na frente
      return this.items[0];
    }
    return null;
  }
  
  // retorna o tamanho da fila
  size() {
    return this.items.length;
  }

  // insere o elemento na fila
  enqueue(element) {
    this.items.push(element);
  }
  
  //desinfileira o elemento da fila
  dequeue(element) {
    if (this.items.length == 0) {
      return null;
    }
    
    // O método shift remove o elemento de índice zero, 
    // diminui em 1 os indices dos demais valores e retorna o valor removido.
    let item = this.items.shift();
    return item
  }
}


function findBin(n) {
    let result = [];
    let queue = new Queue();
    let s1,s2;
    queue.enqueue("1");
    for (let i = 0; i < n; i++) {
        result.push(queue.dequeue());
        s1 = result[i] + "0";
        s2 = result[i] + "1";
        queue.enqueue(s1);
        queue.enqueue(s2)
    }
    return result;
}

console.log(findBin(3));