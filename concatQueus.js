  let arrayOne = [2, 3, 5, 7, 11];
  let arrayTwo = [19, 23, 29, 31];
  let arrayThree = [13, 17];

  class Node {
    constructor(val) {
      this.val = val;
      this.previous = null;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    add(val) {
      let n = new Node(val);
      if (this.head === null) {
        this.head = n;
        this.tail = n;
      } else {
        this.tail.previous = n;
        n.next = this.tail;
        this.tail = n;
      }
      this.size += 1;
    }

    pop() {
      if (this.tail == null) {
        return null;
      }
      this.size -= 1;
      let val = this.head.val;
      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.previous;
        this.head.next = null;
      }
      return val;
    }

    size() {
      return this.size;
    }
  }

  function createQueue(array) {
    let queue = new Queue();
    for (let i = 0; i < array.length; i++) {
      queue.add(array[i]);
    }
    return queue;
  }

  let q1 = createQueue(arrayOne);
  let q2 = createQueue(arrayTwo);
  let q3 = createQueue(arrayThree);

  let listQueue = [q1,q2,q3]
  //q1.tail.previous = q2.head; //Tem uns probleminhas

  function logQueue(q) {
    let n = q.head;
    if (n == null) {
      console.log("empty queue");
    }
    while (n !== null) {
      console.log(n.val);
      n = n.previous;
    }
  }

  function concatenateQueue(qn, qt) {
    if (qn.size == 0) {
      return qt;
    }
    if (qt.size == 0) {
      return qn;
    }
    /* O tail do q1 aponta para o head do q2 */
    qn.tail.previous = qt.head;
    qn.tail = qt.tail
    qn.size += qt.size;
    return qn;
  }

  function concatenateQueues(queueList) {
    let currentQueue = new Queue();

    for (const queue of queueList) {
      currentQueue = concatenateQueue(currentQueue, queue);
      logQueue(currentQueue)
      console.log("-")
    }
    return currentQueue;
  }

  logQueue(concatenateQueues(listQueue));
