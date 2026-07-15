
// 3. Create object with personal data

const personalData = {
  name: "Marat",
  age: 39,
  email: "maratti1987@jmail.com",
  phone: "+7 937 592 66 19",
  jobTitle: "Wireline Logging Engineer",
  address: {
    street: "Lenina",
    city: "Bugulma",
    country: "Russia"
  },
};

// 4. Create object with car data

const carData = {
  brand: "KIA",
  model: "Sorento",
  year: 2025,
  color: "White",
  engine: {
    type: "Hybrid",
    horsepower: 200
  },
  transmission: "Automatic",
  }

carData.owner = personalData

// 5. Create function with checking maxSpeed

function checkMaxSpeed(carData) {
  if (!carData.maxSpeed) {
    carData.maxSpeed = 200;
  }
}
checkMaxSpeed(carData);

console.log(carData.maxSpeed)

// 6.Create a function with two parameters: an object and a property name.
function showCarInfo(object, property) {
  console.log(object[property]);
}

showCarInfo(carData, "brand");
showCarInfo(carData, "model");

// 7. Create an array containing product names
const productNames = ["KIA Sorento", "Toyota Camry", "Honda Accord"];

// 8.Create an array of objects, where an object represents a book

const bookList = [
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869
  },
  {
    title: "Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    year: 1864
  },
  {
    title: "Eugene Onegin",
    author: "Alexander Pushkin",
    year: 1830
  }
];

bookList.push({
  title: "Neznaika na Lune",
  author: "Nikolai Nosov",
  year: 1965
})

console.log(bookList)

// 9. Create another array consisting of movies

const americanBooks = [
  {
    author: "Jack London",
    title : "White Fang ",
    year: 1906,
    genre: "Novel",
  },
  {
    author: "Jack London",
    title : "Martin Eden",
    year: 1909,
    genre: "Novel"
  },
  {
    author: "Jack London",
    title : "The Sea-Wolf ",
    year: 1904,
    genre: "Novel"
  }
];

const allBooks = [...bookList, ...americanBooks];

console.log(allBooks);

// 10. 

const updatedBooks = allBooks.map(book => {
  return {
    ...book,
    isRare: book.year > 1900
  };
});

console.log(updatedBooks)