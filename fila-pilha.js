let list = [1, 2, 3, 4, 5];

class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    let n = new Node(val);
    if (this.head === null) {
      this.head = n;
    } else {
      n.previous = this.head;
      this.head = n;
    }
    this.size += 1;
  }

  pop() {
    if (this.head == null) {
      return null;
    }
    this.size -= 1;
    let val = this.head.val;
    if (this.head == this.tail) {
      this.head = null;
    } else {
      this.head = this.head.previous;
    }
    return val;
  }
}

function invertList(list) {
  const stack = new Stack();
  for (let i = 0; i < list.length; i++) {
    stack.add(list[i]);
  }
  const invertArray = [];
  while (stack.size > 0) {
    invertArray.push(stack.pop());
  }
  return invertArray;
}

console.log(invertList(list));

function printStack(q) {
  if (q.size == 0) {
    console.log("empty queue!");
    return;
  }
  let values = [];
  let n = q.head;
  for (let i = 0; i < q.size; i++) {
    values.push(n.val);
    n = n.previous;
  }
  console.log(values.join("->"));
}

function runExample() {
  debugger;
  let q = new Stack();
  q.add(1);
  q.add(2);
  q.add(3);
  printStack(q);
  console.log(q.pop());
  printStack(q);
  console.log(q.pop());
  printStack(q);
  console.log(q.pop());
}
