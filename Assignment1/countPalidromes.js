function countPalidromes(stringValue) {
    let palidromes = [];

    function palidromesFromCenter(left, right) {
        while (left >= 0 && right < stringValue.length && stringValue[left] === stringValue[right]) {
            let palidrome = stringValue.slice(left, right + 1);
            if (!palidromes.includes(palidrome)) {
                palidromes.push(palidrome);
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < stringValue.length; i++) {
        palidromesFromCenter(i, i);
        palidromesFromCenter(i, i + 1);
    }
    console.log(`The palidromes in ${stringValue} are : ${palidromes}`);
    console.log(`The number of palidromes in ${stringValue} are : ${palidromes.length}`);
}
console.log(countPalidromes('abba'));
