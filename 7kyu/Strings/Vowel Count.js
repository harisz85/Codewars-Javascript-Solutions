function getCount(str) {
    let vowelsCount = 0;


    let vowels = ["a", "e", "i", "o", "u"];

    for (let character of str) {

        vowels.includes(character) ? vowelsCount++ : 0;
    }

    return vowelsCount;
}