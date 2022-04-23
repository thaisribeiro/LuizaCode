class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SimpleList {
  constructor(size=0, head=null){
    this.size = size;
    this.head = null;
  }
  
  add(value) {
    // inicia lista com valores
    let currentNode = this.head;

    // cria um novo nó
    let node = new Node(value);
    
    // verifica se o nó atual está vazio/nulo
    if(!currentNode) {
      this.head = node;
      this.size++;
      return node;
    }

    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.size++;
    return node;
  }

  printList(list) {
    if (list == null) {
      console.log('is empty');
      return false;
    }
    else {
      let temp = list.head;
      let str_list = ''
      
      while(temp != null)  {
        str_list += temp.data + "->";
        temp = temp.next;
      }

      console.log(str_list);
      return true;
    }
  }
}

const list = new SimpleList();
list.add(5);
list.add(8);
list.add(10);
list.add(1);
list.printList(list);