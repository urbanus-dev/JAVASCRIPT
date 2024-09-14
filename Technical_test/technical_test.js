


//1. Write a JavaScript program to list the properties of a JavaScript object.
let StudentInfo = {
    fName: 'Urbanus',
    lName: 'Wambua',
    age: 25,
    gender: 'male',
    school: 'Dedan Kimathi University',
    course: 'Computer Science',
};
for(i=0;i<Object.keys(StudentInfo).length;i++){
console.log( `${Object.keys(StudentInfo)[i]},`);
};

/** 
 * output: 
fName,
lName,
age,
gender,
school,
course,
*/



//delete a property from the object
let StudentsInfo = {
    fName: 'Urbanus',
    lName: 'Wambua',
    age: 25,
    gender: 'male',
    school: 'Dedan Kimathi University',
    course: 'Computer Science',
};
delete StudentsInfo.age;
delete StudentsInfo.school;
console.log(StudentsInfo);

/* 
Output:
fName: 'Urbanus',
  lName: 'Wambua',
  gender: 'male',
  course: 'Computer Science'
  */



// Write a JavaScript program to get the length of a JavaScript object
let Student1Info = {
    fName: 'Urbanus',
    lName: 'Wambua',
    age: 25,
    gender: 'male',
    school: 'Dedan Kimathi University',
    course: 'Computer Science',
};  
console.log(Object.keys(StudentInfo).length);  //output 6


 // Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status)
var books =[{

    author: 'Bill Gates',

    title: 'The Road Ahead',

    readingStatus: true

},

{

    author: 'Steve Jobs',

    title: 'Walter Isaacson',

    readingStatus: true

},

{

    author: 'Suzanne Collins',

    title:  'Mockingjay: The Final Book of The Hunger Games', 

    readingStatus: false

}];
books.forEach (function(book){
    console.log(book.title + " by " + book.author + " - Reading status: " + book.readingStatus);
})

/*
Output:
The Road Ahead by Bill Gates - Reading status: true
Walter Isaacson by Steve Jobs - Reading status: true
Mockingjay: The Final Book of The Hunger Games by Suzanne Collins - Reading status: false 
*/


// Write a JavaScript program that returns a subset of a string.
function StringSubset(str){
let subset=[]
for( let i=0; i<str.length; i++){
for(let j=i+1; j<=str.length; j++){
    subset.push(str.slice(i, j));
}
}
return subset;
}
console.log(StringSubset('dog'));
// Output [ 'd', 'do', 'dog', 'o', 'og', 'g' ]


//sort js objects
var library = [ 

    {
        title:  'The Road Ahead',
 
        author: 'Bill Gates',
 
        libraryID: 1254
 
    },
 
    {
 
        title: 'Walter Isaacson',
 
        author: 'Steve Jobs',
 
        libraryID: 4264
 
    },
 
    {
 
        title: 'Mockingjay: The Final Book of The Hunger Games',
 
        author: 'Suzanne Collins',
 
        libraryID: 3245
    }];
    library.sort(function(a, b){
        return b.libraryID - a.libraryID;
    })
    console.log(library);
    /*
    Output
    [
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }
] 
  */


// Write a JavaScript function to print all the methods in a JavaScript object.

function findAllMethods(obj){
    return Object.getOwnPropertyNames(obj).filter(function(property){
        return typeof obj[property]=== "function";
    })
}
console.log(findAllMethods(Array))
// Output   : [ 'isArray', 'from', 'of', 'fromAsync' ]


// parse URL
function parseURL(url) {
    const parsedUrl = new URL(url);
    return {
        href: parsedUrl.href,
        protocol: parsedUrl.protocol,
        host: parsedUrl.host,
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        pathname: parsedUrl.pathname,
        search: parsedUrl.search,
        hash: parsedUrl.hash,
    };
}

const url = 'https://www.example.com:80/path/to/page?query=param#section';
console.log(parseURL(url));
/*
Output:
{
  href: 'https://www.example.com:80/path/to/page?query=param#section',
  protocol: 'https:',
  host: 'www.example.com:80',
  hostname: 'www.example.com',
  port: '80',
  pathname: '/path/to/page',
  search: '?query=param',
  hash: '#section'
}
  */


// Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
function getAllProps(obj){
    let props = [];
    for( let prop in obj){
        props.push(obj[prop]);
    }
    return props;
}
console.log(getAllProps(Math));


// Write a JavaScript function to retrieve all the values of an object's properties.

function getAllValues(obj){
return Object.values(obj);
}
let obj = {color: 'red', name :'mabati', brand: 'rolling mills'};
console.log(getAllValues(obj));

// Output  :[ 'red', 'mabati', 'rolling mills' ]

// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function convertObjectToList(obj){
    return Object.entries(obj);
}
let obj1 = {color: 'red', name :'mabati', brand: 'rolling mills'};
console.log(convertObjectToList(obj1));
/* 
Output:
[
  [ 'color', 'red' ],
  [ 'name', 'mabati' ],
  [ 'brand', 'rolling mills' ]
]*/


//Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
function invertKeysAndValues(obj){
    let inverted = {};
    for( let key in obj){
        inverted[obj[key]] = key;
    }
    return inverted;
}
let obj2 = {color: 'red', name :'mabati', brand: 'rolling mills'};
console.log(invertKeysAndValues(obj2));

//{ red: 'color', mabati: 'name', 'rolling mills': 'brand' }

// Write a JavaScript function to check if an object contains given property.
function hasProperty(obj, prop){
    return obj.hasOwnProperty(prop);
}
let obj3 = {color: 'red', name :'mabati', brand: 'rolling mills'};
console.log(hasProperty(obj3, 'color'));
// Output is true