function printn(message) {
    console.log(message);
}

function store(text) {
    let binaryString = '';
    for (let i = 0; i < text.length; i++) {
        const binaryChar = text.charCodeAt(i).toString(2);
        binaryString += binaryChar.padStart(8, '0'); // Ensure it's a full byte
    }
    console.log(binaryString);
}

function add(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}

function divide(a, b) {
    console.log(a / b);
}

function loophashtag(loop) {
    for (let stuff = 0; stuff < loop; stuff++) {
        console.log("#");
    }
}

function canvas(can) {
    for (let row = 0; row < can; row++) { // Iterate over each row
        let line = ""; // Start with an empty line for each row
        for (let col = 0; col < can; col++) { // Iterate over each column
            line += "#"; // Add a hash to the line
        }
        console.log(line); // Print the complete line
    }
}

function check() {
    console.log("checker");
}

function random(randomnumber) {
    return Math.floor(Math.random() * (randomnumber + 1));
    
}

// Example usage:


// When the window loads, draw the canvas
window.onload = function() {
    
};
