class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    // console.log('head after', this.head);
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leaderNode = this.traverseToIndex(index - 1);
    const follower = leaderNode.next;
    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    unwantedNode.next.prev = leaderNode;
    leaderNode.next = unwantedNode.next;
    this.length--;
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
    console.log(this);
    return console.log(array);
  }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(4);
myLinkedList.prepend(20);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);

myLinkedList.printList();
