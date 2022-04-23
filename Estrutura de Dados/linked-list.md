As listas vinculadas são uma série de nós vinculados em que cada nó aponta para o próximo nó da lista. Cada nó tem um valor e um ponteiro para o próximo nó. Existem também listas duplamente ligadas em que cada nó também aponta para o nó anterior na lista.

As listas vinculadas usam o método “last-in-first-out” (semelhante a uma pilha) onde os nós são adicionados e excluídos da mesma extremidade.

Para procurar um nó em uma lista encadeada, temos que começar no nó principal (o primeiro nó da lista) e percorrer cada nó até encontrá-lo ou chegar ao final da lista.

![image](https://user-images.githubusercontent.com/34129569/156056181-5a856114-413c-41bb-aa7e-df7c49353f9f.png)


## Métodos
As listas vinculadas usam dois métodos principais ( push , pop ) e vários métodos auxiliares ( get index , delete , isEmpty ).

* push(Node) : adiciona um elemento à lista vinculada
* pop() : remove um elemento da lista vinculada
* get(index) : Retorna um elemento de um determinado índice (mas não o remove)
* isEmpty() : Retorna um booleano indicando se a lista está vazia
