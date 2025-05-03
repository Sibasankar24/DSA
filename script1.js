// Generic function to show example based on type
function showExample(type) {
    const examples = {
        array: `let array = [1, 2, 3, 4, 5];
console.log(array[0]); // Accessing the first element`,
        stack: `class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2`,
        queue: `class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1`
    };

    const element = document.getElementById(`${type}-example`);
    if (element && examples[type]) {
        element.textContent = examples[type];
    } else {
        console.error("Invalid type or element not found");
    }
}

// Function to display array examples
function showArrayExample() {
    const arrayExamples = {
        basic: `let array = [1, 2, 3, 4, 5];
console.log(array[0]); // Accessing the first element`,
        "2d": `let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(array2D[1][2]); // Accessing element at row 2, column 3`,
        dynamic: `let dynamicArray = [];
dynamicArray.push(1); // Adding elements dynamically
dynamicArray.push(2);
console.log(dynamicArray); // Output: [1, 2]`
    };

    const arrayType = document.getElementById('array-type').value;
    const arrayExampleElement = document.getElementById('array-example');

    if (arrayExampleElement && arrayExamples[arrayType]) {
        arrayExampleElement.textContent = arrayExamples[arrayType];
    } else {
        console.error("Invalid array type or element not found");
    }
}

// Function to display linked list examples
function showLinkedListExample() {
    const linkedListExamples = {
        singly: `// Singly Linked List Implementation
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}
const sll = new SinglyLinkedList();
sll.add(1);
sll.add(2);`,
        doubly: `// Doubly Linked List Implementation
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }
}
const dll = new DoublyLinkedList();
dll.add(1);
dll.add(2);`,
circular:`class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class CircularLinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }
}
const cll = new CircularLinkedList();
cll.add(1);
cll.add(2);`
    };

    const linkedListType = document.getElementById('linkedlist-type').value;
    const linkedListExampleElement = document.getElementById('linkedlist-example');

    if (linkedListExampleElement && linkedListExamples[linkedListType]) {
        linkedListExampleElement.textContent = linkedListExamples[linkedListType];
    } else {
        console.error("Invalid linked list type or element not found");
    }
}

// Function to display stack examples
function showStackExample() {
    const stackExamples = {
        simple: `class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2`,
        arraybased: `let stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2`
    };

    const stackType = document.getElementById('stack-type').value;
    const stackExampleElement = document.getElementById('stack-example');

    if (stackExampleElement && stackExamples[stackType]) {
        stackExampleElement.textContent = stackExamples[stackType];
    } else {
        console.error("Invalid stack type or element not found");
    }
}
