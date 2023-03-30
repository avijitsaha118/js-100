// Problem-1: Given an array of numbers, find the smallest number.

// const numbers = [4, 2, 7, 1, 8];
// let smallestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }

// console.log(smallestNumber);

// Problem-2. Given an array of numbers, find the largest number.

// const numbers = [1, 2, 3, 4, 5];
// let largestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largestNumber) {
//     largestNumber = numbers[i];
//   }
// }

// console.log(largestNumber);

// Problem:3 Given an array of numbers, find the sum of all numbers.

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// Problem-4.  Given an array of strings, create a new array with the first letter of each string.

// const strings = ['hello', 'world', 'foo', 'bar'];
// const firstLetters = [];

// for (let i = 0; i < strings.length; i++) {
//   firstLetters.push(strings[i][0]);
// }

// console.log(firstLetters);

// Problem-5. Given an array of numbers, create a new array with only the even numbers.
// const numbers = [1, 2, 3, 4, 5];
// const evens = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evens.push(numbers[i]);
//   }
// }

// console.log(evens);

// Problem-6. Given an array of strings, find the longest string.

// const strings = ['hello', 'world', 'foo', 'bar'];
// let longestString = strings[0];

// for (let i = 1; i < strings.length; i++) {
//   if (strings[i].length > longestString.length) {
//     longestString = strings[i];
//   }
// }

// console.log(longestString);

// Problem-7. Given an array of numbers, find the average.

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// const average = sum / numbers.length;

// console.log(average);

// Problem-8. Given an array of strings, sort them in alphabetical order.

// const strings = ['hello', 'world', 'foo', 'bar'];

// console.log(strings.sort());

// Problem-9: Given an array of numbers, remove all duplicates.

// const numbers = [1, 2, 3, 4, 2, 3];
// const uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers);

// Problem-10: Given an array of integers, find two numbers that add up to a target value.

// const numbers = [2, 7, 11, 15];
// const target = 9;

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] + numbers[j] === target) {
//       console.log(numbers[i], numbers[j]);
//     }
//   }
// }

// Problem-11: A food ordering app needs to sort the menu items by price.

// const menuItems = [
//     { name: "Burger", price: 5.99 },
//     { name: "Fries", price: 2.99 },
//     { name: "Soda", price: 1.99 },
//     { name: "Pizza", price: 10.99 },
//   ];

//   // sort menu items by price in ascending order
//   menuItems.sort((a, b) => a.price - b.price);

//   console.log(menuItems);

// Problem-12: A social media app needs to find all unique hashtags used in a user's posts.

// const userPosts = [
//     "Just went for a #run #fitness",
//     "Enjoying the #weekend #friends",
//     "Can't wait for the #vacation #beach",
//   ];

//   const hashtags = new Set();

//   // loop through user's posts and add hashtags to set
//   for (let post of userPosts) {
//     const words = post.split(" ");
//     for (let word of words) {
//       if (word.startsWith("#")) {
//         hashtags.add(word.slice(1));
//       }
//     }
//   }

//   console.log(hashtags);

// another example-

// const posts = [
//     { id: 1, content: "Check out my #cat pictures! #cute #feline" },
//     { id: 2, content: "I love #coffee! #caffeineaddict" },
//     { id: 3, content: "Just finished a great #workout! #fitnessgoals" },
//   ];

//   const hashtags = new Set();

//   posts.forEach((post) => {
//     const regex = /#\w+/g; // regular expression to match hashtags
//     const matches = post.content.match(regex);
//     if (matches) {
//       matches.forEach((match) => hashtags.add(match.slice(1))); // add hashtag without #
//     }
//   });

//   console.log(hashtags);

// Problem-13: A weather app needs to format a list of temperatures in Celsius and Fahrenheit for display.

// const temperatures = [12, 25, 8, 19, 3];

// // convert Celsius temperatures to Fahrenheit and format
// const formattedTemperatures = temperatures.map((temp) => {
//   const fahrenheit = temp * 1.8 + 32;
//   return `${temp}°C (${fahrenheit.toFixed(1)}°F)`;
// });

// console.log(formattedTemperatures);

// Problem-14: A video sharing site needs to keep track of the number of views, likes, and comments on each video.

// const videos = [
//   {
//     id: "abc123",
//     title: "How to Code a React App",
//     views: 1000,
//     likes: 50,
//     comments: [
//       { id: "c1", text: "Great tutorial!" },
//       { id: "c2", text: "Thanks for sharing!" },
//     ],
//   },
//   {
//     id: "def456",
//     title: "Building a REST API with Node.js",
//     views: 500,
//     likes: 25,
//     comments: [
//       { id: "c3", text: "Very helpful, thanks!" },
//       { id: "c4", text: "Can't wait to try this out!" },
//     ],
//   },
// ];

// // increment the view count of a video
// function incrementViewCount(videoId) {
//   const video = videos.find((v) => v.id === videoId);
//   video.views += 1;
//   console.log(`View count for video ${videoId}: ${video.views}`);
// }

// // add a comment to a video
// function addComment(videoId, comment) {
//   const video = videos.find((v) => v.id === videoId);
//   video.comments.push(comment);
//   console.log(`Comments for video ${videoId}:`, video.comments);
// }

// // Example usage
// incrementViewCount("abc123");
// addComment("def456", { id: "c5", text: "This was exactly what I needed!" });

// Problem-15. Facebook needs to keep track of the number of reactions (like, love, haha, wow, sad, angry) on each post.
// (The problem is called "Finding the Two Numbers that Add up to a Target Value".)

// const posts = [
//   {
//     id: "_1",
//     author: "Avijit Saha",
//     content: "JavaScript 100 Basic Problems!",
//     reactions: {
//       like: 50,
//       love: 20,
//       haha: 5,
//       wow: 2,
//       sad: 1,
//       angry: 0,
//     },
//   },
//   {
//     id: "_2",
//     author: "Anonymous",
//     content: "Just finished my first Hack!",
//     reactions: {
//       like: 100,
//       love: 75,
//       haha: 10,
//       wow: 3,
//       sad: 0,
//       angry: 1,
//     },
//   },
// ];

// // increment the count of a reaction for a post
// function incrementReactionCount(postId, reactionType) {
//   const post = posts.find((p) => p.id === postId);
//   post.reactions[reactionType] += 1;
//   console.log(`Incremented ${reactionType} reaction count for post ${postId}`);
// }

// // test the incrementReactionCount function
// incrementReactionCount("_1", "like"); // Incremented like reaction count for post p123
// incrementReactionCount("_2", "haha"); // Incremented haha reaction count for post p456

// console.log(posts);

/* Real world example about Target value problem: Suppose you are developing an e-commerce website that allows customers to purchase products. You want to implement
a feature that suggests related products to customers based on their previous purchases.
To do this, you decide to look for pairs of products that customers frequently purchase together.
You have an array of integers representing the product IDs of all purchases made on your website
in a single day. You want to find pairs of
products that customers frequently purchase together so that you can suggest them as related products.*/

// const purchases = [1, 2, 3, 4, 5, 1, 3, 5, 6, 7, 2, 4, 8, 9, 9];
// const target = 10;
// const pairs = [];

// for (let i = 0; i < purchases.length; i++) {
//   for (let j = i + 1; j < purchases.length; j++) {
//     if (purchases[i] + purchases[j] === target) {
//       pairs.push([purchases[i], purchases[j]]);
//     }
//   }
// }

// console.log(pairs);

/*A restaurant wants to keep track of its inventory of ingredients for various dishes.
The restaurant's chefs need to be able to easily update the inventory levels for each ingredient as they use them in dishes.*/

// const ingredients = [
//   { name: "dough", inventory: 10 },
//   { name: "tomato sauce", inventory: 8 },
//   { name: "mozzarella cheese", inventory: 6 },
//   { name: "pepperoni", inventory: 4 },
//   { name: "mushrooms", inventory: 3 },
// ];

// // Function to update inventory level for a given ingredient
// function updateInventory(name, quantity) {
//   const ingredient = ingredients.find((i) => i.name === name);
//   if (ingredient) {
//     ingredient.inventory -= quantity;
//     console.log(
//       `Inventory updated for ${name}: ${ingredient.inventory} remaining`
//     );
//   } else {
//     console.log(`Ingredient ${name} not found`);
//   }
// }

// // Example usage:
// updateInventory("dough", 2); // Output: Inventory updated for dough: 8 remaining
// updateInventory("tomato sauce", 3); // Output: Inventory updated for tomato sauce: 5 remaining
// updateInventory("olives", 1); // Output: Ingredient olives not found

// const apps = [
//     {
//       name: "Twitter",
//       category: "Social Media",
//       numRatings: 1000,
//       totalScore: 4500,
//     },
//     {
//       name: "Instagram",
//       category: "Social Media",
//       numRatings: 2000,
//       totalScore: 9000,
//     },
//     {
//       name: "Spotify",
//       category: "Music",
//       numRatings: 500,
//       totalScore: 2000,
//     },
//     {
//       name: "Netflix",
//       category: "Video Streaming",
//       numRatings: 1500,
//       totalScore: 6000,
//     },
//   ];

//   const sortedApps = apps.sort((a, b) => {
//     const avgRatingA = (a.totalScore / a.numRatings).toFixed(1);
//     const avgRatingB = (b.totalScore / b.numRatings).toFixed(1);
//     return avgRatingB - avgRatingA;
//   });

//   console.log(sortedApps);

//Problem-18. Given an array of objects representing products, sort the products by price from lowest to highest.

// const products = [
//     { name: "iPhone 13", price: 999 },
//     { name: "Pixel 6", price: 749 },
//     { name: "Galaxy S21", price: 699 },
//     { name: "OnePlus 9 Pro", price: 969 },
//   ];

//   // sort products by price from lowest to highest
//   products.sort((a, b) => a.price - b.price);

//   // print sorted products
//   console.log(products);

// Problem-19. Suppose you have an array of objects representing people, and you want to filter the array to only include people who are over 18 years old.

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 21 },
//   { name: 'David', age: 14 },
// ];
// const adults = people.filter(person => person.age >= 18);
// console.log(adults);

/* Relevant example-1: Suppose you have a list of books and you want to allow users to search for a book by its title.
You could represent the list of books as an array of objects, where each object represents a book with a title, author, and year of publication.*/

// const books = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//   { title: "1984", author: "George Orwell", year: 1949 },
//   { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
//   { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
// ];
// const searchBooks = (query) => {
//   const results = books.filter((book) =>
//     book.title.toLowerCase().includes(query.toLowerCase())
//   );
//   console.log(results);
// };
// searchBooks("the");

// Relevant example-02: Suppose you have a list of Google search results and you want to allow users to filter the results by the domain of the website. You could represent the list of search results as an array of objects, where each object represents a search result with a title, URL, and description.

// const searchResults = [
//   {
//     title: "Google",
//     url: "https://www.google.com/",
//     description:
//       "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
//   },
//   {
//     title: "Wikipedia",
//     url: "https://www.wikipedia.org/",
//     description:
//       "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.",
//   },
//   {
//     title: "YouTube",
//     url: "https://www.youtube.com/",
//     description:
//       "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
//   },
//   {
//     title: "Amazon",
//     url: "https://www.amazon.com/",
//     description:
//       "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.",
//   },
//   {
//     title: "Facebook",
//     url: "https://www.facebook.com/",
//     description:
//       "Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.",
//   },
// ];
// const filterResultsByDomain = (domain) => {
//   const results = searchResults.filter((result) => result.url.includes(domain));
//   console.log(results);
// };
// filterResultsByDomain("google");

// Problem-20: in a web application that displays a list of products with their prices in
// different currencies. Let's say that we have an array of products, where each product has a name
// and a price property in USD. We want to display a list of these products with their prices converted to a different currency, based on the user's preferences.

// const products = [
//   { name: "iPhone", price: 999 },
//   { name: "MacBook", price: 1499 },
//   { name: "AirPods", price: 249 },
// ];

// const currencyExchangeRate = 0.85; // Euro to USD exchange rate
// const currencySymbol = "€"; // Euro symbol

// const productsInEuros = products.map((product) => ({
//   name: product.name,
//   price: product.price * currencyExchangeRate,
//   formattedPrice: `${currencySymbol}${(
//     product.price * currencyExchangeRate
//   ).toFixed(2)}`,
// }));

// console.log(productsInEuros);

// Relevant example- in a React application is when rendering a list of items fetched from an API. Let's say that we have an API that returns an array of objects, where each object represents a book with properties like title, author, description, and imageUrl. We want to display a list of these books on a web page, with their title, author, and cover image.

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function BookList() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get('https://my-book-api.com/books')
//       .then(response => setBooks(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   console.log(books);

//   return (
//     <div>
//       <h2>List of Books</h2>
//       {books.map(book => (
//         <div key={book.id}>
//           <h3>{book.title}</h3>
//           <p>{book.author}</p>
//           <img src={book.imageUrl} alt={book.title} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BookList;

//another best map mathod example

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .map((number, index) => {
//     // 1. Transform each number by multiplying it by its index
//     const transformedNumber = number * index;

//     // 2. Skip odd numbers
//     if (number % 2 !== 0) {
//       return null;
//     }

//     // 3. Filter out numbers less than 10
//     if (transformedNumber < 10) {
//       return null;
//     }

//     // 4. Return a new object with the transformed number and index
//     return {
//       originalNumber: number,
//       transformedNumber,
//       index,
//     };
//   })
//   .filter((item) => item !== null);

// console.log(result);

// Relevant Example 1: Formatting data for display

// const users = [
//   { id: 1, name: "John", email: "john@example.com", age: 25 },
//   { id: 2, name: "Jane", email: "jane@example.com", age: 30 },
//   { id: 3, name: "Bob", email: "bob@example.com", age: 40 },
// ];

// const userTableData = users.map((user) => ({
//   name: user.name,
//   email: user.email,
//   age: user.age,
// }));

// console.log(userTableData);

//object related problem

//problem-21: Converting an object to an array

// const obj = { name: "Albert", age: 30 };

// const arr = Object.entries(obj);

// console.log(arr);

// Problem- 22: Merging two objects

// const obj1 = { name: "Avijit Saha", phone: 3000001 };
// const obj2 = { address: "Dhaka" };

// const newObj = Object.assign({}, obj1, obj2);

// console.log(newObj);

// Problem-23: A user profile object might include properties like name, email, username, password, avatar, bio, location, website, and socialMediaLinks. Show the the user's name and location to the console.

// const userProfile = {
//   name: 'Avijit',
//   email: 'avijitsaha.js@gmail.com',
//   username: 'avi',
//   password: 'password123',
//   avatar: 'https://example.com/avatar.png',
//   bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   location: 'Dhaka, Bangladesh',
//   website: 'https://example.com',
//   socialMediaLinks: {
//     twitter: 'https://twitter.com/avi',
//     instagram: 'https://instagram.com/avi',
//     facebook: 'https://facebook.com/avi',
//   },
// };

// function nameAndLocation(user) {
//   console.log(`Name: ${user.name}`);
//   console.log(`Location: ${user.location}`);
// }

// nameAndLocation(userProfile);

//problem-24: Problem-24: [Note: Prototypes are a fundamental concept in JavaScript. A programmer should understand how prototypes work and how to use them to create inheritance relationships between objects.]
// Now, create an object with a specific prototype is to use the Object.create()

// const person = {
//   name: "Java",
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
// };

// const student = Object.create(person);
// student.name = "JavaScript";
// student.major = "Object";

// console.log(student.name);
// student.sayHello();

// Here another way to create an object with a specific prototype is to use the constructor function and the new operator:

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   console.log(`Hello, my name is ${this.name}.`);
// };

// const js = new Person("JavaScript");
// const python = new Person("Python");

// console.log(js.name);
// js.sayHello();
// console.log(python.name);
// python.sayHello();
