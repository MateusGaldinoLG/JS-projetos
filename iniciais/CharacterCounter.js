const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

var upper = 0;
var lower = 0;
var number = 0;
var special = 0;
var space = 0;

function Counter(str){
    for(var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if(ch >= 'A' && ch <='Z') {
            upper++;
        }
        else if(ch >='a' && ch <= 'z') {
            lower++;
        }
        else if(ch >= '0' && ch <= '9') {
            number++;
        }
        else if(ch = ' '){
            space++; 
        }
        else {
            special++;
        }
    }
}		

rl.question('What is the word or phrase you want to count?', (userinput) =>{
    Counter(userinput);
    rl.close();
})


rl.on('close',()=>{
    console.log("Lower case letters: "+lower);
    console.log("Upper case letters: "+upper);
    console.log("Number: "+number);
    console.log("Spaces: "+space);
    console.log("Special characters: "+special);
})
