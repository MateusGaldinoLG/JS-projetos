const fs = require('fs');

var txt;
var counts = {}; //null object that receives the words
var keys = []; //null array that organizes the words

fs.readFile('target.txt', (err, data) =>{
    if(err){
        console.log(err);
    }
    else{
        txt = data.toString(); //converts the txt to string
    }
    counter(txt)
})

//count the words
function counter(txt){
    var tokens = txt.split(/\W+/); //split the string in small strings separated by non alphanumerical symbols
    //console.log(tokens);
    for(var i = 0; i < tokens.length; i++){
        var word = tokens[i].toLowerCase();
        if(!/\d+/.test(word)){ //if it's not a number
            if(counts[word] === undefined){
                counts[word] = 1;
                keys.push(word);
            }
            else{
                counts[word] += 1;
            }
        }
    }
    keys.sort(compare);
    printar(keys);
    //console.table(counts)
}

function compare(a,b){
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
}

function printar(x){
    for(var i = 0; i < 10;i++){
        var key = x[i];
        //console.log(key + " " + counts[key]);
        escrever(key);
    }
   
}

//escreve todos os resultados em um outro arquivo, dessa vez na ordem correta
function escrever(key) {
    fs.appendFileSync('zipflaw.txt', `${key}: ${counts[key]} \n`, (err) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log(".")
        }
    } )
}