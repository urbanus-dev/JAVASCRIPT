function reverseString(revStr){
    reversedString= revStr.toLowerCase().split('').reverse().join('');
    return reversedString;
}
console.log(reverseString('hello world , welcome today'))

