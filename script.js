//1-String
const name = 'Juan'
console.log('My name is:',name)

//2-String
const lastName = 'Boujon'
console.log('My last name is:',lastName)

//3-Number
var age = 30
console.log('My age is:',age)

//4-Number
var height = 189
console.log('My height is:',height)

//5-Boolean
var job = false
console.log('I have a job?',job)

//6-Boolean
var partner = false
console.log('I have a partner?',partner)

//7-Numbers Array
var favoriteNumbers = [8, 28]
console.log('My favorite numbers are:',favoriteNumbers)

//8-String Array
var iniciatecFriends = ['Ivan', 'jose', 'Cesar', 'Franco', 'Andres']
console.log('My Iniciatec friends are:',iniciatecFriends)

//9-Object
var friend = {
    name: 'Joaquin Nieves',
    age: 31,
    partner: true,
    favoriteNumbers: [6, 47]
}
console.log('My best friend is:',friend)

//10-Object whit arrays and objects
var user = {
    name: 'Juan Boujon',
    age: 30,
    partner: false,
    favoriteNumbers: [8,28],
    petsNames: [{
        name: 'Floki',
        specimen: 'Half Shar Pei',
        agePet: 4,
        color: 'ligth-brown'
    },{
        name: 'Uma',
        specimen: 'Caniche Toy',
        agePet: 6,
        color: 'black'
    }]
}
console.log('My personal data is:',user)