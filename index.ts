import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countWords(text: string): number {
text = text.trim();
    
    const words = text.split(/\s+/);
    return words.length;
}
function promptForInput() {
    rl.question("Enter a sentence: ", (input: string) => {
        const wordCount = countWords(input);
        console.log("Word count:", wordCount);

       rl.close();
    });
}
promptForInput();
