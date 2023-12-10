"use strict";
//Q#01:
//Install Node.js, TypeScript and VS Code on your computer
//Q#02:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let eric = "“Hello Eric, would you like to learn some Python today?”";
console.log(eric);
//Q#03:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let aleezy = "ALEEZY aleezy Aleezy";
console.log(aleezy);
//Q#04:   Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:    Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
//Q#05:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let fname = "Albert Einstein once said,";
let quote = " “A person who never made a mistake never tried anything new.”";
console.log(`${fname} ${quote}`);
//Q#06Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("Hello\tworld");
console.log("Hello\nworld");
//Q#07:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
let a = 5;
a += 3;
console.log(a);
let b = 10;
b -= 2;
console.log(b);
let c = 4;
c *= 2;
console.log(c);
let d = 16;
d /= 2;
console.log(d);
//Q#08:  You should create four lines that look like this: console.log(5 + 3)
console.log(5 + 3);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);
//Q#09:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let fvrt = "0 is my favourite number";
console.log(fvrt);
//Q#10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
let a1 = 5;
let a2 = 6;
console.log(`${a1}+${a2}=${a1 + a2}`);
console.log(`${a1}-${a2}=${a1 - a2}`);
//Q#11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friends_name = ["Esha", "Aleeza", "Mahnoor", "Amna"];
console.log(friends_name[0]);
console.log(friends_name[1]);
console.log(friends_name[2]);
console.log(friends_name[3]);
//Q#12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let message = "is the founder of PIAIC";
console.log(friends_name[0] + "" + message);
console.log(friends_name[1] + "" + message);
console.log(friends_name[2] + "" + message);
console.log(friends_name[3] + "" + message);
//Q#13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["Bike",
    "Car",
    "Cycle"];
transportation.map((item) => (console.log(`I would like to own a ${item}`)));
//Q#14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest = ["Aleeza", "Erum", "Sadia"];
guest.map((item) => (console.log(`Dear ${item} you are invited to dinner`)));
//Q#15:
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let changes = "Sadia";
console.log(`Sorry ${changes} is not coming to dinner`);
let new_guest = "Sadaf";
guest[guest.indexOf(changes)] = new_guest;
guest.map((item) => (console.log(`Dear ${item} you are invited to dinner`)));
console.log(guest);
//Q#16:
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("\nGood news! We found a bigger dinner table.\n");
let newguest = "Zeba";
guest.unshift(newguest);
console.log(guest);
let middleguest = "Mustafa";
let middleindex = guest.length / 2;
guest.splice(middleindex, 0, middleguest);
console.log(guest);
guest.push("Sadia");
console.log(guest);
guest.map((item) => (console.log(`Dear ${item} you are invited to dinner`)));
//Q#17:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Sorry I can not invite to dinner");
while (guest.length > 2) {
    let removeguest = guest.pop();
    console.log(`Dear ${removeguest}, you are not invited to dinner `);
}
guest.map((item) => (console.log(`Dear ${item} you are invited to dinner`)));
guest.pop();
guest.pop();
console.log(guest);
//Q#18:. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places = ["Pakistan", " National Park", "Rome", "Switzerland", "London"];
// Print the array in its original order
console.log("Original order: " + places.join(", "));
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order: " + places.slice().sort().join(", "));
// Show that the array is still in its original order by printing it
console.log("Original order: " + places.join(", "));
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order: " + places.slice().sort().reverse().join(", "));
// Show that the array is still in its original order by printing it again
console.log("Original order: " + places.join(", "));
// Reverse the order of the list. Print the array to show that its order has changed
places.reverse();
console.log("Reversed order: " + places.join(", "));
// Reverse the order of the list again. Print the list to show it’s back to its original order
places.reverse();
console.log("Original order: " + places.join(", "));
// Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed
places.sort();
console.log("Alphabetical order: " + places.join(", "));
// Sort the array to change its order to reverse alphabetical. Print the list to show that its order has changed
places.sort().reverse();
console.log("Reverse alphabetical order: " + places.join(", "));
//Q#19Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest_ = ["Aleeza", "Erum", "Sadia", "Mustafa", "SAdaf", "Zeba"];
console.log(guest_.length + " " + "people" + " " + " are invited to dinner");
//Q#20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let programming = ["Javascript", "Typescript", "HTML", "Python"];
programming.map((items) => (console.log(items)));
//Q#21They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let obj = {
    name: "Aleeza",
    rollno: "002345",
    age: 20
};
console.log(obj);
//Q#22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.
let arr = ["video1", "video2", "video3"];
let index = 3;
let element = arr[index]; // produces an index error
console.log(element);
let validelement = arr[1];
console.log(validelement);
//Q#23: Conditional Tests: Write a series of conditional tests. Print a statement
//describing each test and your prediction for the results of each test.  Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let x = 5;
let y = 10;
//Test1
console.log("Is x is smaller than y? I predict true");
console.log(x < y);
//TEST2
console.log("Is x is greater  than y? I predict false");
console.log(x > y);
//Test3
console.log("Is x is smaller than  and equal to y? I predict true");
console.log(x <= y);
//Test4
console.log("Is x is greater than y? I predict false");
console.log(x >= y);
//Test5
console.log("Is x is not equal to y? i predict false ");
console.log(!(x == y));
//Test6
console.log("Is x is equal to y? I predict false");
console.log((x == y));
//Test7
console.log("Is x is equal to y? I predict false");
console.log(x === y);
//Test8
console.log("Is x is not equal to y? I predict true");
console.log(!(x === y));
//Test9
console.log("Is x is equal to 5 and y equal to 10? I predict true");
console.log(x == 5 && y == 10);
//Test10
console.log("Is x is equal to 5 or y is equal to 5? I predict false");
console.log(x == 5 && y == 5);
//Q#24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let fName = "aleeza";
let lName = "saleem";
//Test1
console.log("Is fName is equal to lName? I predict false");
console.log(fName == lName);
//Test2
console.log("Is fName is not equal to lName? I predict true");
console.log(!(fName == lName));
//Test2(b)
console.log("is fName is equal to lName when case is ignored? i predict false");
console.log(fName.toLowerCase() == lName.toLowerCase());
//Test3
let p = 3;
let q = 4;
console.log("Is p is smaller than q? I predict true");
console.log(p < q);
//Test4
console.log("Is p is greater than q ? I predict false");
console.log(p > q);
//Test5
console.log("Is p is smaller than and equal to y ?  I predict true");
console.log(p <= q);
//Test6
console.log("Is p is greater  than and equal to y ?  I predict false");
console.log(p >= q);
//Test7
console.log("Is p is equal to 3 and y equal to 4?  I predict true");
console.log(p == 3 && q == 4);
//Test8
console.log("Is p is equal to 3 and y equal to 6?  I predict false");
console.log(p == 3 && q == 6);
//Test9
console.log("Is p is equal to 3 and y equal to 4?  I predict true");
console.log(p == 3 || q == 4);
//Test10
console.log("Is p is equal to 5 and y equal to 5?  I predict false");
console.log(p == 5 || q == 5);
//Test11
let arr2 = [4, 6, 8];
console.log("is 4 in the array? I predict true");
console.log(arr2.includes(4));
//Test12
console.log("is 2 in the array? I predict false");
console.log(arr2.includes(2));
//Q#25Alien Colors #1: Imagine an alien was just shot down in a game. Create a
//variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
let alien_color = "green"; //yellow or red
if (alien_color == "green") {
    console.log("you just earn 5 points");
}
let alien_color1 = "red"; //yellow or red
if (alien_color1 == "green") {
    console.log("the player just earned 5 points");
}
//Q#26Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color2 = "green"; //yellow or red
if (alien_color2 != "green") {
    console.log("you just earned 5 points");
}
else {
    console.log("the player just earned 10 points");
}
//Q#27Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color3 = "green";
if (alien_color3 == "green") {
    console.log("the player just earned 5 points");
}
else if (alien_color3 === "yellow") {
    console.log("the player just earned 10 points");
}
else if (alien_color3 === "red") {
    console.log("the player just earned 15 points");
}
alien_color3 = "yellow";
if (alien_color3 == "green") {
    console.log("the player just earned 5 points");
}
else if (alien_color3 === "yellow") {
    console.log("the player just earned 10 points");
}
else if (alien_color3 === "red") {
    console.log("the player just earned 15 points");
}
alien_color3 = "red";
if (alien_color3 == "green") {
    console.log("the player just earned 5 points");
}
else if (alien_color3 === "yellow") {
    console.log("the player just earned 10 points");
}
else if (alien_color3 === "red") {
    console.log("the player just earned 15 points");
}
//Q#28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let personage = 30;
if (personage < 2) {
    console.log("the person is baby");
}
else if (personage < 4) {
    console.log("the person is a toddler");
}
else if (personage < 13) {
    console.log("the person is a kid");
}
else if (personage < 20) {
    console.log("the person is a teenager");
}
else if (personage < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
//Q#29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!
let favourite_fruits = ["watermelon", "mango", "orange"];
if (favourite_fruits.includes("watermelon")) {
    console.log("you really likes watermelon");
}
if (favourite_fruits.includes("mango")) {
    console.log("you really likes mango");
}
if (favourite_fruits.includes("orange")) {
    console.log("you really likes orange");
}
if (favourite_fruits.includes("banana")) {
    console.log("you really likes banana");
}
if (favourite_fruits.includes("kiwi")) {
    console.log("you really likes kiwi");
}
//Q#30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
let username_array = ["admin", "eric", "john", "wood", "hales"];
for (let i = 0; i < username_array.length; i++) {
    if (username_array[i] === "admin") {
        console.log("hello admin would you like to see a status report");
    }
    else {
        console.log(`Hello ${username_array[i]} thank you for logging it again`);
    }
}
//Q#31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
if (username_array.length == 0) {
    console.log("need to find some user");
}
username_array.pop();
username_array.pop();
username_array.pop();
username_array.pop();
username_array.pop();
console.log(username_array);
//Q#32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users1 = ["Robert", "Mark", "William", "Maxwell", "Mount"];
let new_users2 = ["Mark", "Robert", "Bilal", "Okasha", "Hamzah"];
for (let i = 0; i < new_users2.length; i++) {
    let new_user1 = new_users2[i].toLowerCase();
    if (current_users1.includes(new_user1)) {
        console.log(`Sorry , the user ${new_users2[i]} is already taken.Please enter a new username`);
    }
    else {
        console.log(`Congratulations! ${new_users2[i]} is taken`);
    }
}
//Q#33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
//Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
//7th 8th 9th", and each result should be on a separate line.
let ordinalnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinalnumber.length; i++) {
    if (ordinalnumber[i] === 1) {
        console.log("1st");
    }
    else if (ordinalnumber[i] === 2) {
        console.log("2nd");
    }
    else if (ordinalnumber[i] === 3) {
        console.log("3rd");
    }
    else if (ordinalnumber[i] === 4) {
        console.log("4th");
    }
    else if (ordinalnumber[i] === 5) {
        console.log("5th");
    }
    else if (ordinalnumber[i] === 6) {
        console.log("6th");
    }
}
console.log("7th", "8th", "9th");
//Q#34: Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
let pizza = ["fajita", "chicken", "vegetarian"];
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]} pizza`);
}
console.log("Pizza, oh pizza, how I love thee, Your crust so crispy, your cheese so cheesy. Toppings galore, from pepperoni to mushroom, You’re the perfect food, my favorite dish to consume..These pizzas are my most favourite because their taste are so amazing , I really loves pizza ");
//Q#35: Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
let animals = {
    cat: "cat is black",
    lion: "lion is sharp",
    cow: "cow is beautiful"
};
for (let i = 0; i < 1; i++) {
    console.log(animals.cat);
    console.log(animals.lion);
    console.log(animals.cow);
}
console.log("cow would make a great pet");
//Q#36:T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size, message) {
    return size + " " + message;
}
let ans = make_shirt("34 is the size of the shirt ", "the stuff of the shirt is pure");
console.log(ans);
//Q#37: Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt1(size, message) {
    return size + " " + message;
}
let ans2 = make_shirt1("medium is the new size of shirt", "I love typescript");
console.log(ans2);
//Q#38 Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi", "Pakistan");
describe_city("New York");
describe_city("Lahore");
//Q#39City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city, country) {
    return city + " " + country;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("karachi", "Pakistan"));
console.log(city_country("Sydney", "Australia"));
//Q#40: Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, number_of_tracks = null) {
    let album = {
        "artist_name": artist_name,
        "album_title": album_title
    };
    if (number_of_tracks) {
        album[number_of_tracks] = number_of_tracks;
    }
    return album;
}
let album1 = make_album('Adele', '21');
let album2 = make_album('Taylor Swift', '1989');
let album3 = make_album('Ed Sheeran', '÷ (Divide)');
console.log(album1);
console.log(album2);
console.log(album3);
//Q41:. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Kock", "John", "Dunk"];
function show_magicians() {
    console.log(magicians);
}
show_magicians();
//Q#42: Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function make_great(message) {
    return message;
}
let nnn = make_great("the great");
console.log(nnn, magicians[0]);
console.log(nnn, magicians[1]);
console.log(nnn, magicians[2]);
//Q#43: Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function make_great_copy(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}
// Call the function with an array of magician's names
let magicians3 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let great_magicians = make_great_copy("Harry Houdini");
console.log(great_magicians);
//Q#44: Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function sandwichSummary(items) {
    console.log(`You ordered a sandwich with ${items.length} `);
}
// Call the function three times with different number of arguments
sandwichSummary("lettuce");
sandwichSummary("katchup");
sandwichSummary("peanut butter");
//Q#45:Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
function carsinfo(manufacturer, model) {
    return manufacturer + " " + model;
}
let finale = carsinfo("BMW", "red");
console.log(finale);
