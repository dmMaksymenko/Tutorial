// ===========Exercise 1: Filtering Elements===============
//   Create a new array that contains only the even numbers using the filter method.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = [];
// const filteredArray = arr => {
//   const result = arr.filter((num) => num % 2 === 0);
//   evenNumbers.push(result);
//   console.log(evenNumbers);
// };
// filteredArray(numbers);

// ============ Exercise 2:  Mapping Elements ================
// Create a new array that contains the lengths of each string using the map method.

// const strings = ['apple', 'banana', 'orange', 'strawberry'];

// const mappedString = strings.map(string => {
//   return string.length;
// });

// console.log(mappedString);

// =================== Exercise 3: Reducing Elements =============
// Calculate the sum of all numbers using the reduce method.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((total, num) => total + num,0);
// console.log(sum);

// =============== Exercise 4: Finding Elements =============
// Find the index of the first occurrence of 'orange' using the indexOf method.

// const fruits = ['apple', 'banana', 'orange', 'strawberry'];
// const numbers = [1, 2, 3, 4, 5];
// const firstIndex = numbers.indexOf(3);
// console.log(firstIndex);

// =============Exercise 5: Sorting Elements===============
// Sort the array in ascending order using the sort method.

// const unsortedNumbers = [5, 2, 8, 1, 7];
// console.log(unsortedNumbers.sort());

// ===================Exercise 6: Chaining Methods=============
// Convert the words to uppercase, filter out words with fewer than 5 characters, and then sort them alphabetically using the map, filter, and sort methods.

// const words = ['strawberry', 'banana', 'orange', 'apple'];

// const newArr = words
//   .map(word => word.toUpperCase())
//   .filter(word => word.length <= 5)
//   .sort();
// console.log(newArr);
// console.log(words);

// =======================Exercise 7: Transforming Objects in an Array============
// Create a new array that contains only the names using the map method.

// const people =
//   [{ name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 }];

// const newArr = people.map(person => person.name.toUpperCase());
// console.log(newArr);

// =================Exercise 8: Sum of Squares===============
// Calculate the sum of the squares of each number using the reduce method.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((total, num) => {
//   return total + num ** 2;
// }, 0);
// console.log(sum);

// ================Exercise 9: Counting Occurrences================
// Count the number of occurrences of the value 2 using the reduce method.

// const numbers = [1, 2, 3, 4, 2, 5, 2, 6];
// const occurrences = numbers.reduce((acc, num) => {
//   return acc + (num === 2);
// },0);
// console.log(occurrences);

// =================Exercise 10: Flattening Arrays================
// Flatten the array into a single array using the reduce method.

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flattenArray = nestedArray.flatMap(num=> num);
// console.log(flattenArray);
// const flatArray = nestedArray.reduce((acc, num) => {
//   return [...acc, ...num];
// },[]);
//   console.log(flatArray);

// ==============Exercise 11: Removing Duplicates===============
// Create a new array without duplicates using the filter method.
// const duplicateArray = [1, 2, 3, 2, 4, 5, 4, 6];
// const filteredArray = duplicateArray.filter((num, idx, array) =>{
//   return array.indexOf(num) === idx;
// });
// console.log(filteredArray);

// ==================Exercise 12: Partitioning Arrays================
// Partition the array into two arrays, one containing even numbers and the other containing odd numbers using the filter method.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);
// console.log(numbers);
// const oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers);

// ================Exercise 13: Finding Maximum and Minimum================
// Find the maximum and minimum values in the array using the reduce method.

// const numbers = [8, 3, 11, 5, 2];
// const getMax = (a, b) => Math.max(a, b);
// const getMin = (a, b) => Math.min(a, b);
// const maxNumber = numbers.reduce(getMax, 0);
// const minNumber = numbers.reduce(getMin, Number.POSITIVE_INFINITY);
// console.log(maxNumber);
// console.log(minNumber);

// =================Exercise 14: Grouping Elements by Criteria===========
// Group the objects into separate arrays based on their category using the reduce method.
// const products = [
//   { name: 'Laptop', category: 'Electronics' },
//   { name: 'Banana', category: 'Food' },
//   { name: 'Headphones', category: 'Electronics' },
//   { name: 'Apple', category: 'Food' }
// ];
// const catArray = products.reduce((result, product) => {
//   if (!result[product.category]) {
//     result[product.category] = [];
//   }
//   result[product.category].push(product);
//   return result
// }, []);
// console.log(catArray);

// ==================Exercise 15: Reversing an Array================
// Reverse the order of elements in the array without using the reverse method.

// const originalArray = [1, 2, 3, 4, 5];
// console.log(originalArray.reverse());

// ===========Remove duplicates============

// const numbers = [1, 2, 3, 2, 5, 1];

// function removeDuplicates(array) {
//   return array.filter((num, index,array) => array.indexOf(num)===index);
// }

// const withoutDuplicates = removeDuplicates(numbers);
// console.log(withoutDuplicates); // Output: [1, 2, 3, 5]

// =============Exercise 2: Filter an array based on a condition===========

// const numbers = [1, 2, 3, 4, 5, 6];
// const threshold = 4;

// function filterNumbers(array, threshold) {
//   return  array.filter(num => num > threshold);
// }

// const filteredNumbers = filterNumbers(numbers, threshold);
// console.log(filteredNumbers); // Output: [5, 6]

// ====================Exercise 3: Map an array to create a new array with transformed values==========
// Given an array of strings, write a function that maps each string to its length and returns a new array with the lengths of the strings.

// const words = ["Hello", "world", "JavaScript"];

// function mapStringLengths(array) {
//   return array.map(word => word.length);
// }

// const lengths = mapStringLengths(words);
// console.log(lengths); // Output: [5, 5, 10]

// ===========Exercise 4: Reduce an array to a single value based on an accumulator
// Given an array of numbers, write a function that calculates the sum of all the numbers in the array.

// const numbers = [1, 2, 3, 4, 5];

// function sumNumbers(array) {
//   return array.reduce((total, num) => total+num, 0);
// }

// const total = sumNumbers(numbers);
// console.log(total); // Output: 15

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child.name, child.surname, child.heritage);
// console.log(parent.isPrototypeOf(child));
// console.log(child.hasOwnProperty('heritage'));

// const obj1 = {
//   name: 'Vasya',
//   age: 25,
//   city: 'Dnipro',
//   showInfo() {
//     console.log('---------');
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.city);
//     console.log('---------');
//   },
// };

// class Tesla {
//   #maxSpeed = 300;
//   constructor(model,year,price,color) {
//     this.model = model;
//     this.year = year;
//     this.price = price;
//     this.color = color;
//     this.make = 'Tesla';
//   }

//   showMaxSpeed() {
//   console.log(this.#maxSpeed);
//   }
// }

// const car1 = new Tesla('S', 2021, 35000, 'black');
// console.log(car1);

// car1.maxSpeed = 305;

class MyCalc {
  static counter = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    MyCalc.counter += 1;
  }
  sum() {
    return this.x + this.y;
  }

  subtract() {
    return this.x - this.y;
  }

  divide() {
    return this.x / this.y;
  }

  multiply() {
    return this.x * this.y;
  }

  test() {
    return this.x * this.y * MyCalc.PI;
  }
}

// const calc1 = new MyCalc(10,20);
// const calc2 = new MyCalc(1,5);
// const calc3 = new MyCalc(2,10);
// const calc4 = new MyCalc(1, 50);
// const calc5 = new MyCalc(10,20);
// const calc6 = new MyCalc(10,20);
// const calc7 = new MyCalc(10,20);
// const calc8 = new MyCalc(10,20);
// console.log(calc1.sum());
// console.dir(calc1.test());

// class Animal {
//   constructor() {
//     this.name ;
//     this.age ;
//     this.paws;
//   }

//   sleep() {
//     console.log('Zzzzz');
//   }
// }

// class Dog{
//   constructor(name, age, paws) {
//     this.name = name;
//     this.age = age;
//     this.paws = paws;
//     this.typeVoice = '';
//   }

//   sayHello() {
//     console.log('Woof woof');
//   }
//     sleep() {
//     console.log('Zzzzz');
//   }
// }

// class Cat{
//   constructor(name, age, paws) {
//     this.name = name;
//     this.age = age;
//     this.paws = paws;
//     this.typeMur = '';
//   }

//   sayHello() {
//     console.log('Meoow');
//   }
//     sleep() {
//     console.log('Zzzzz');
//   }
// }

// class Mouse{
//   constructor(name, age, paws) {
//     this.name = name;
//     this.age = age;
//     this.paws = paws;
//     this.hasCheese = false;
//   }

//   sayHello() {
//     console.log('Pi pi');
//   }

//   sleep() {
//     console.log('Zzzzz');
//   }
// }

// const cat = new Cat('Mars',18, 4);
// const dog = new Dog('bars', 5, 4);
// const mouse = new Mouse('maus', 2, 4);

// console.log(cat);
// console.log(dog);
// console.log(mouse);

// class Blogger {
//   email = '';
//   age = 0;
//   numberOfPosts = 0;
//   topics = [];

//   constructor(name, age, numberOfPosts, topics) {
//     this.email = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.numberOfPosts}`
//   }

//   updatePostCount(value) {
//     return this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: 'qweqweq',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking']
// });

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(login) {
//     this.
//   }
// }

// class Car {
//   static #maxPrice = 50000;

// static checkPrice(price){

//   if (price > Car.#maxPrice) {
//     return 'Error! Price exceeds the maximum'
//   } else {
//     return 'Success! Price is within acceptable limits'
//   }
// }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {

//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, access }) {
//     super(email);
//     this.access = access;
//   }
//   blacklistedEmails = [];

//   blacklist(email){
//     return  this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email){
//   return  this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

// const elem = document.querySelector("a");
// console.log(elem);
// const elem2 = document.querySelectorAll('li');
// console.log(elem2);

// const elem = document.getElementById('test');
// console.log(elem);

// const ulElem = document.querySelector('.site-nav');

// console.log(ulElem.parentElement);
// console.log(ulElem.firstElementChild);
// console.log(ulElem.lastElementChild);
// console.log(ulElem.children);

// console.log(ulElem.nextSibling);
// console.log(ulElem.nextElementSibling);

// const heroTitleElem = document.querySelector('.hero-title');

// heroTitleElem.textContent = 'Hello';

// const inputEl = document.querySelector('js-input');

// inputEl.value = 'Hello';
// const imageEl = document.querySelector('hero-image');
// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.getAttribute('class'));
// imageEl.setAttribute('hello', 'hello world');

// imageEl.removeAttribute('hello');

// const buttonEl = document.querySelector('.actions>button');
// buttonEl.hasAttribute('disabled');

// const actions = document.querySelectorAll('.actions button');
// const firstBtnEl = actions[0];
// console.log(firstBtnEl.getAttribute('data-action'));
// console.log(firstBtnEl.dataset.action);

// const liElem = document.querySelector('.site-nav__item');
// liElem.classList.add('site-nav-link--current');
// liElem.classList.remove('awawaw');
// setInterval(() => {
// liElem.classList.toggle('bold');
// // }, 1000);
// liElem.classList.add('test');
// liElem.classList.replace('test', 'test1');
// liElem.classList.contains('');
// const array = [];
// for (let i = 0; i < 100; i++) {
//   const myElem = document.createElement('h1');
// myElem.textContent = 'Hello World';
//   array.push(myElem);
// }

// console.log(array);

// const arr = [];

// for (let i = 0; i < 10; i++){
//   const myElem = document.querySelector('h1');
//   myElem.textContent = 'Hello World';
//   myElem.classList.add('bold');
//   myElem.style.color = 'green';
//   arr.push(myElem);
// }

// console.log(arr);
// const boxElem = document.querySelector('.js-hero');
// boxElem.append(...arr);
// const box = document.querySelector('.js-box');
// const clickMe = document.querySelector('.js-click');
// clickMe.addEventListener('click', onButtonClick);
// box.addEventListener('click', onBoxClick);
// let top = 250;
// let left = 250;
// function onButtonClick() {
//   top += 10;
//   left += 10;
//   box.style.top = `${top}px`;
//   box.style.left = `${left}px`;
// }

// function onBoxClick() {
//   top -= 10;
//   left -= 10;
//   box.style.top = `${top}px`;
//   box.style.left = `${left}px`;
// }

// const userName = document.querySelector('.js-user-name');
// userName.addEventListener('focus', () => {
//   console.log('Hello');
// });
// function on
// const name = userName.value;

// const form = document.querySelector('.js-form');

// const users = [];
// users.push(user.Data)

// form.addEventListener('click', onFormSubmit)

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log(event);
//   form.reset();
// }
// const box = document.querySelector('.js-box');
// let boxLeft = 0;
// let boxTop = 0;

// document.addEventListener('keydown', (event) => {
//   console.log(event.code);

//   switch (event.code) {
//     case 'KeyW': boxTop -= 10; break;
//     case 'KeyA': boxLeft -= 10; break;
//     case 'KeyS': boxTop += 10; break;
//     case 'KeyD': boxLeft += 10; break;
//   }

//   box.style.top = boxTop + 'px';
//   box.style.left = boxLeft + 'px';

// });
// document.addEventListener('keypress', (event) => {
//   console.log('keypress', event.code);
// });
// document.addEventListener('keyup', () => {
//   console.log('keyup');
// });

// document.addEventListener('keypress', (e) => {
//   console.log(e.code);
//   if (e.ctrlKey && e.code === 'KeyQ') {
//     console.log('Hello Q!');
//     box.classList.toggle('valid');
//   }
// });

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', () => {
//   boxRef.classList.add('box-active');
// })

// boxRef.addEventListener('mouseleave', () => {
//   boxRef.classList.add('box-active');
// })

// boxRef.addEventListener('mousemove', (e) => {
//   console.log(e.x, e.y);
//   boxRef.firstElementChild.style.left = e.x + 'px';
//   boxRef.firstElementChild.style.top = e.y + 'px';

// })

// const container = document.querySelector(".container");
// const backdrop = document.querySelector(".backdrop");
// container.addEventListener("click", (e) => {
//   if (e.target.nodeName !== "BUTTON") return;
//   showModal();
// });
// function showModal() {
//   document.body.classList.add("show-modal");
//   window.addEventListener("keydown", onModalClose);
// }

// function hideModal() {
//   document.body.classList.remove("show-modal");
//   window.removeEventListener("keydown", onModalClose);
// }

// backdrop.addEventListener("click", (e) => {
//   if (e.target === e.currentTarget) hideModal();
//   // e.stopPropagation();
// });

// // modal.addEventListener("click", (e) => {
// //   console.log(e.target.style.backgroundColor);
// //   e.stopPropagation();
// // });

// function onModalClose() {
//   console.log(e.code);
//   if (e.code === "Escape") {
//     hideModal();
//   }
// }

// function productTemplate(item) {
//   return ``;
// }

// const { username, age, country } = user;
// const skills = "Hello";
// const {
//   skills: { html, css, js },
//   location: { x, y },
//   username,
//   age,
// } = user;
//const userSkills = user.skills;

// const { test:
//   { location:
//     { cor: {x,y } } } } = user;

// const user = {
//   username: 'Vova',
// };

// let username = 'test';

// { username } = user;

// const arr = [1, 2, 3, 4, 5];

// const [x1, , , , num] = arr;

// console.log(x1, num);

// const obj = {
//   key1: "Hello",
//   key2: "World",
//   key3: "test",
// };

// const values = Object.values(obj);
// const keys = Object.keys(obj);

// for (const [x1, x2] of Object.entries(obj)) {
//   console.log(x1, x2);
// }

// const rgb = [100, 255, 90];
// const [red, green, blue] = rgb;
// console.log(red, green, blue);

// let x = 10;
// let y = 20;
// const t1 = 55;
// const t2 = 60;

// [x, y] = [y, x];

// const user = {
//   username: "Jacob",
//   age: 10,
//   city: "Dnipro",
// };

// function showUserProps({ username, age, city }, x) {
//   console.log(username, age, city, x);
// }

// showUserProps(user, 10);

// const obj = {
//   t1: 10,
// };

// const obj = {
//   x1: "12",
//   x2: "123",
//   x3: "345",
// };

// const { x1, x2, x3, x4 = 0 } = obj;
// console.log(x1, x2, x3, x4);
// const options = {
//   fontSize: "24px",
//   backgroundColor: "green",
//   border: "1px solid black",
// };

// function foo({
//   fontSize = "26px",
//   backgroundColor = "silver",
//   border = "1px solid black",
//   display = "block",
// }) {
//   console.log(fontSize);
//   console.log(backgroundColor);
//   console.log(border);
//   console.log(display);
// }

// foo(options);

// const book = {
//   id: "qweqw",
//   title: "Title",
//   price: 200,
//   author: "Vova",
//   description: "qweqeqw",
// };

// const { id, price, ...myBook } = book;
// const { title } = myBook;
// console.log(myBook);

// function saveBook({ id, ...book }) {
//   console.log(book);
// }
// console.log(book);

// { name, price, category, details: { brand, color, weight } } = product;

// document.addEventListener("mousemove", onMouseMove);

// function onMouseMove(e) {
//   console.log(e.x, e.y);
// }
// const data = "10";
// const myJson = JSON.stringify(data);//string
// console.log(typeof myJson);

// const myData = JSON.parse(data);
// console.log(myData);

// const data = {
//   name: "Lol",
// };
// const str = JSON.stringify(data);
// console.log(str);

// localStorage.setItem("test1", "ALla");

// const data = localStorage.getItem("myWord");

// const word = JSON.parse(data);
// console.log(word);

// console.log("End");

//=================SavetolocaleStorage function======================
// function saveToLS(key = "empty", value = "") {
//   const jsonData = JSON.stringify(value);
//   localStorage.setItem(key, jsonData);
// }

// function loadFromLS(key) {
//   const data = localStorage.getItem(key);

//   try {
//     const result = JSON.parse(data);
//     return result;
//   } catch {
//     return data;
//   }
// }
//=============================================

// function onLoad() {
//   const data = loadFromLS(Storage_Key);
// }
// onLoad();

// const arr = [12, 3, 1, 4, 5, 1];
// console.log(arr);

// class Timer {
//   constructor(tick) {
//     this.tick = tick;
//   }
//   start() {
//     setInterval();
//   }
//   stop() {
//     console.log("stop");
//   }
// }
// const timer = new Timer();
// timer.start();

// function tick() {
//   console.log("Tick");
// }

// function getGrade(s1, s2, s3) {
//   const score = (s1 + s2 + s3) / 3;

//   return score >= 90
//     ? "A"
//     : score >= 80
//     ? "B"
//     : score >= 70
//     ? "C"
//     : score >= 60
//     ? "D"
//     : "F";
// }

// console.log(getGrade(100, 75, 65));

// function doubleChar(str) {
//   const charArray = str.split("");
//   const doubleChar = charArray.map(function (char) {
//     return char + char;
//   });
//   const resultString = doubleChar.join("");
//   return resultString;
// }
// console.log(doubleChar("Hello World"));
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// function updateLight(current) {
//   const trafficLights = ["red", "yellow", "green"];
//   return trafficLights[(trafficLights.indexOf(current) + 1) % 3];
// }
// console.log(updateLight("orange"));
// console.log(updateLight("red"));
// console.log(updateLight("yellow"));
// function descendingOrder(n) {
//   const newArr = [...n].toString();
//   const sortedArr = sorted(newArr, (reverse = True));
//   console.log(sortedArr);
//   //...
// }
// descendingOrder(12345);
// function getCommentsByPostId(postId) {
//   const BASE_URL = "https://jsonplaceholder.typicode.com";
//   const END_POINT = "/comments";
//   const PARAMS = `?postId=${postId}`;
//   const url = BASE_URL + END_POINT + PARAMS;

//   const options = {
//     headers: {
//       test: "Hello World",
//       test1: "test_123",
//     },
//   };
//   return fetch(url, options)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// getCommentsByPostId(1);
// function getPrice(x) {
//   const BASE_URL = ;
//   const END_POINT =;
//   const PARAMS = `?hero=${superhero}`;

//   const url = BASE_URL + END_POINT + PARAMS;

// }

// function renderHero(hero) {
//   const markup = heroTemplate(hero);
//   re
// }

// function findIp(ip) {
//   const BASE_URL = ;
//   const END_POINT =;
//   const PARAMS = ;
//   const url = BASE_URL + END_POINT + PARAMS;

//   const options = {
//     headers:
//   }
// }

// const book = {
//   title: 'Test',
//   author: 'Vova',
//   desc: 'qweqweqe',
// }

// function createBook(book) {
//   const BASE_URL = 'http://localhost:3000';
//   const END_POINT = ;
//   const url = BASE_URL + END_POINT;

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book)
//   }
//   fetch(url, options)
// }
// createBook(book);

// function foo() {
//   const promise = fetch().then; (res => res.json());

//   promise1.then(data => {
//     console.log('1');
//     console.log(data);

//     promise2.then(data => {
//       console.log('2');
//       console.log();
//     })
//   })
// }

// async function foo() {
//   console.log("start");
//   const promise = await fetch();
//   console.log("end");
// }

// foo();

function foo() {
  const url = "";
  const p1 = fetch(url);

  p1.then((data) => {
    console.log(data);
  });
}
