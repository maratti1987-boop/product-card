
class Book{
  constructor(name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
  }
  start(){
    console.log(`Книга ${this.name} была написана автором ${this.author} в ${this.year} году`);
  }
}

class Magazine extends Book{
  constructor(name, author, year, genre){
    super(name, author, year);
    this.genre = genre;
  }

  start(){
    console.log(`Журнал ${this.name} был написан автором ${this.author} в ${this.year} году и относится к жанру ${this.genre}`);
  }
}

const myBook = new Book('Война и мир', 'Лев Толстой', 1869);
myBook.start();

const myMagazine = new Magazine('National Geographic', 'John Doe', 2020, 'Science');
myMagazine.start();


