

function extractProperties(objects, ...properties){
    return objects.map((obj)=>{
        let newObj={}
        for(let props of properties){
            if(props in obj){
                newObj[props]=obj[props]
            }
        }
        return newObj
    })
}
const objects=[{ a: 1, b: 2, c: 3 },{ a: 4, b: 5, c: 6 }]
console.log(extractProperties(objects, 'a', 'c'))