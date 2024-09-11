
function areAnagrams(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');

}
console.log(areAnagrams('Listen', 'silent'));
console.log(areAnagrams('hello', 'world'));
console.log(areAnagrams('hello', 'world'));

