// stacks
// functions : push, pop, peek, length

var letters = []; // stack

var word  = "katak"

var rword = "";

// put letters of word into stack
for(var i = 0; i < word.length; i++) {
    // console.log(letters.push(word[i]));
    // console.log(letters);
    console.log(word[i]);
}

// pop off the stack in reverse order
for(var i = 0; i <word.length; i++) {
    console.log(rword += letters.pop());
}

if (rword === word) {
    console.log(word + " is a palindrome");
}else {
    console.log(word + " is not a palindrome.");
}