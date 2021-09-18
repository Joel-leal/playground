/* Dada uma sting que inicia com "(" determinar se o final dela é com ")"   */
const text = '((())';
/* function isBalanced(word) {
  let openBrackets = 0
  for (let i = 0; i < word.length; i++){
    if (word[i] === "(") {
      openBrackets += 1
    } else if (word[i] === ')'){
      openBrackets -= 1
    }
    if (openBrackets < 0){
      return false
    }
  }
  return openBrackets == 0
} */


function isBalanced(s) {
  let stackOpenBrackets = new Stack();
  for (let i = 0; i < s.length; i++) {
    if(s[i] == "("){
      stackOpenBrackets.add(s[i])
    }
    if(s[i] == ")" && stackOpenBrackets.size == 0){
      return false
    }
    if(s[i] == ")"){
      stackOpenBrackets.pop()
    }
  }
  return stackOpenBrackets.size == 0
}

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

const testCase = [
  ["()", true],
  ["(())", true],
  ["(()", false],
]

for (let i =0; i < testCase.length; i++){
  // console.assert(isBalanced(testCase[i][0]), testCase[i][1])
  console.log(`expected:${testCase[i][1]}, gotten: ${isBalanced(testCase[i][0])}`)
}

/*

function assert(v1, v2){
  if(v1 != v2){
    throw "error"
  }
}
*/