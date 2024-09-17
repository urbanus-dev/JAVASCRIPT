

function combinedArrays(...arrays){
const combineArray=[].concat(...arrays)
const uniqueArray=[...new Set(combineArray)]
return uniqueArray
}
const arr1=[1,2,3]
const arr2=[3,4,5]
const arr3=[5,6,7]
console.log(combinedArrays(arr1,arr2,arr3))