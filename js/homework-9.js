

import { commentsList } from "./comments.js";

// 2. 

const numbers = [1, 2, 3, 4, 5, 6, 7,8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);
console.log (filteredNumbers); // [5, 6, 7, 8, 9, 10]

// 3. Create an array of strings.

const carBrands = ["KIA", "Toyota", "Honda", "Ford", "Chevrolet"];
const isKoreaBrand = carBrands.includes("KIA");
console.log(isKoreaBrand);


// 4. Write a function that takes an array as an argument and reverses its order.

function reverseArray(arr) {
    return arr.reverse();
}
const reversedCarBrands = reverseArray(carBrands);
const reversedNumbers = reverseArray(numbers);
console.log(reversedCarBrands); // ["Chevrolet", "Ford", "Honda", "Toyota", "KIA"]
console.log(reversedNumbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// 7. user's email contains ".com"
 
const comEmailComment = commentsList.filter (comment => comment.email.includes(".com"))
console.log(comEmailComment);

// 8. User's id

const idUser = commentsList.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(idUser);

// 9. objects contain an ID and a name

const shortUsers = commentsList.map(user => ({
  id: user.id,
  name: user.name
}));
console.log(shortUsers);

// 10. Add the isInvalid property to objects.

const updatedComments = commentsList.map(comment => ({
  ...comment,
  isInvalid: comment.body.lenght > 180
}));
console.log(updatedComments);

// 11. Use reduce and map arrays

const emailsReduce = commentsList.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsReduce);

const emailsMap = commentsList.map(comment => comment.email);
console.log(emailsMap);

// 12. Use toString and join methods

const stringToString = emailsReduce.toString();
console.log(stringToString);

const stringJoin = emailsReduce.join(" * ");
console.log(stringJoin);