function longestPalidromicSubstring(stringValue) {
    let longest = '';

    function palidromesFromCenter(left, right) {
        while (left >= 0 && right < stringValue.length && stringValue[left] === stringValue[right]) {
            let palidrome = stringValue.slice(left, right + 1);
            if (palidrome.length > longest.length) {
                longest = palidrome;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < stringValue.length; i++) {
        palidromesFromCenter(i, i);
        palidromesFromCenter(i, i + 1);
    }
    console.log(`The longest palidrome in ${stringValue} is : ${longest}`);
}
console.log(longestPalidromicSubstring('abbaccccc'));