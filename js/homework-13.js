class Drink {
  #temperature;

  constructor(name, size, price) {
    if (new.target === Drink) {
      throw new Error ('Класс Drink абстрактный');
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = 20;
  }

  getInfo() {
    return `Напиток: ${this.name}, размер: ${this.size}, цена: ${this.price} руб., температура: ${this.#temperature}°C`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    if (newTemperature >= 0 && newTemperature <= 100) {
      this.#temperature = newTemperature;
    } else {
      console.log('Ошибка: температура должна быть в диапазоне от 0 до 100 градусов Цельсия.');
    }
  }

  #prepareDrink () {
    console.log(`Приготовление напитка`);
  }

  serveDrink () {
    this.#prepareDrink();
    console.log(`Напиток ${this.name} подан`);
  }
}


class Tea extends Drink {
  constructor(name, size, price, teaType, hasLemon){
    super(name, size, price);

    this.teaType = teaType;
    this.hasLemon = hasLemon;
  }
  getInfo(){
    return `${super.getInfo()}, Cорт чая: ${this.teaType}, Лимон: ${this.hasLemon ? 'Да' : 'Нет'}`;
  }
}

const tea = new Tea('Зеленый чай', '300 мл', 150,'Сенча', true);
tea.setTemperature(83);

// console.log(tea.getInfo());


class Coffee extends Drink {
  constructor(name, size, price, beanType, milkType) {
    super(name, size, price);

    this.beanType = beanType;
    this.milkType = milkType;
  }

   getInfo() {
      return `${super.getInfo()}, Зерно: ${this.beanType}, Молоко: ${this.milkType}`;
    }
}

const coffee = new Coffee('Латэ', '300 мл', '249', 'Арабика', 'Кокосовое')
coffee.setTemperature(80);

// console.log(coffee.getInfo());


class Lemonade extends Drink {
  constructor(name, size, price, flavor, sparkling) {
    super(name, size, price);

    this.flavor = flavor;
    this.sparkling = sparkling;
  }

  getInfo() {
    return `${super.getInfo()}, Вкус: ${this.flavor}, Газированный: ${this.sparkling ? 'Да' : 'Нет'}`;
  }
}


// Кафе

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе: ${this.name}, адрес: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Заказ принят: ${drink.name}`);
    drink.serveDrink();
  }
}

const cafe = new Cafe('Steak House', 'ул. Шашина, 10');

console.log(cafe.getInfo());

cafe.orderDrink(tea);