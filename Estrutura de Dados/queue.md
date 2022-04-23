As filas são muito semelhantes às pilhas, mas usam o paradigma “primeiro a entrar, primeiro a sair”. Isso significa que o elemento mais antigo (o elemento que foi adicionado primeiro) é o próximo item a ser removido. Podemos imaginar uma fila como uma fila de pessoas esperando para comprar ingressos de cinema. A pessoa que está esperando há mais tempo na fila é a próxima a ser atendida.

![image](https://user-images.githubusercontent.com/34129569/155966629-5ade7b4d-30e3-465c-8347-4dcff7d92978.png)

## Queue Methods

As filas usam três métodos primários  `( enqueue , dequeue , peek )` e vários métodos auxiliares `( isEmpty , get length )`.

* enqueue() : Adiciona um item ao final da fila
* dequeue() : Remove um item da frente da fila
* peek() : Retorna o item na frente da fila (mas não o remove)
* isEmpty() : Verifica se a fila está vazia
* get length() : Retorna o comprimento da fila