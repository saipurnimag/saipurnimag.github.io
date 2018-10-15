
console.log('app.js');
//wrapper function to the pigfun function
var string;
var output;
function splitting() {
    var chunk = document.getElementById("inputarea").value;
    var wordtosend = '';
    var output = '';
    var word;
    for (var i = 0; i < chunk.length; i++) {
        var char = chunk[i];
        if (isNormalChar(char)) {
            wordtosend = wordtosend + char;
        }
        else {
            if (wordtosend != '') {
                output += pigFun(wordtosend);
                wordtosend = '';
            }
            output += char;
        }
    }
    if (wordtosend != '') {
        output += pigFun(wordtosend);
    }
    document.getElementById("outputarea").value = output;
}
function pigFun(phrase) {
    var prefix, finalstr, pst = -1, ay = "ay", suffix;
    for (var i = 0; i < phrase.length; i++) {
        if (isItAVowel(phrase[i])) {
            pst = i;
            break;
        }
    }
    //if a vowel is not found we simply place the 'ay' at the end of our word
    if (pst == -1) {
        output = phrase + ay;
        return output;
    }
    else {
        suffix = phrase.substring(0, pst) + ay;
        prefix = phrase.substring(pst, phrase.length);
        output = prefix + suffix;
        return output;
    }
}

function isNormalChar(ch) {
    var smallLetters = /[a-z]/;
    var capitalletters = /[A-Z]/;
    if ((ch.match(smallLetters)) || (ch.match(capitalletters))) {
        return true;
    }
    return false;
}

function isItAVowel(ch) {
    //Why kill so many times like this? Only once fasak
    var vowels = /[aeiou]/;
    if (ch.match(vowels)) {
        return true;
    }
}
