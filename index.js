// Code your solutions in this file

function writeCards(stringNames, eventName) {
    for(let i=0; i<stringNames.length; i+=1){
        stringNames[i] = `Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`
    }
    return stringNames;
}

countDown = number => {
    while (number>=0) {
        console.log(number);
        number-=1;
    }
}