

function filterAndSort(filter, ...numbers){
    return numbers.filter(filter)
        .sort((a, b) => a - b);
}
const isEven=((num)=>num%2===0)
console.log(filterAndSort(isEven, 5, 3, 8, 6, 2))
