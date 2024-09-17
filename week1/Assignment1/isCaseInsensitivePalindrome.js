function isCaseInsensitivePalindrome(string) {
    let cleanedString = String(string).toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}