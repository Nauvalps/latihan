// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Remove and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    // returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
} 

var MyStack = new Stack();

MyStack.push(1);
MyStack.push(2);
// MyStack.push(3); 
console.log(MyStack.peek());
console.log(MyStack.pop());
console.log(MyStack.peek());
MyStack.push("katak");
console.log(MyStack.size());
console.log(MyStack.peek());
console.log(MyStack.pop());
console.log(MyStack.peek());
