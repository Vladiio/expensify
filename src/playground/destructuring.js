// const person = {
//     // name: 'Vlad',
//     age: 24,
//     location: {
//         city: 'Kharkiv',
//         temperature: 3
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { temperature: temp, city} = person.location;

// console.log(`It's ${temp} in ${city}`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Rayn Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// const address = [
//     '1299 S Jeniper Street',
//     'Philadelhia',
//     'Pennsylvania',
//     '19147'
// ];

// const [, , state = 'London'] = address;

// console.log(`You are in ${state}`);


const item = [
    'coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
];

const [ itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);