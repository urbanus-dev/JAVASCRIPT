function isPalindrome(value) {
    let cleanedString = String(value).toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}
console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome("hello world"));
console.log(isPalindrome(1001));
