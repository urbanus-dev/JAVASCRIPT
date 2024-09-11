function removeDuplicates(string) {
    let result = "";
    let freq = {};
    for (i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase();
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1
            result = result + char;
        }
    }
    return result;
}
console.log(removeDuplicates('hello world'));
console.log(removeDuplicates('hello'));