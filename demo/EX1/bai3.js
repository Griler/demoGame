function count(strings) {
    var i = 0;
    let count = 0;
    var character = '';
    while (i <= strings.length) {
        character = strings.charAt(i);
        if (character == character.toUpperCase()) {
            count++;
        }
        i++;
    }
    return count++;
}
let strings = 'oneTwoThree';
console.log(count(strings))
