class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    // console.log('head before', this.head);
    this.tail.next = newNode;
    // console.log('head after', this.head);
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let currentNode = this.head;
    this.tail = this.head;
    let nextNode = currentNode.next;

    while (nextNode) {
      console.log('currentNode\n', currentNode);
      console.log('nextNode\n', nextNode);
      const temp = nextNode.next;
      console.log('temp\n', temp);
      nextNode.next = currentNode;
      console.log('nextNode after\n', nextNode);
      currentNode = nextNode;
      console.log('currentNode after\n', currentNode);
      nextNode = temp;
      console.log('nextNode after\n', nextNode);
      console.log('\n\n\n');
    }

    this.tail.next = null;
    this.head = currentNode;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode);
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return console.log(array);
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(4);

myLinkedList.printList();
console.log('\n\n\n');

myLinkedList.reverse();
myLinkedList.printList();
