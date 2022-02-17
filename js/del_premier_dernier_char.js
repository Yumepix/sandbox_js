// Supprimer premier et dernier caractère d'une chaine de caractère

let ma_phrase = "EMa chaine de caractèress"

function removeChar(str){
    return ma_phrase.substr(1,ma_phrase.length-1)
}

console.log(removeChar(ma_phrase))



// On peut aussi utilise slice

ma_phrase = "EMa chaine de caractèress"

function removeCharSlice(str){
    return str.slice(1, -1);
}

console.log(removeCharSlice(ma_phrase))

