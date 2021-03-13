"use strict";
var num = 23;
var bool = true;
var str = "Hello";
// OBJECTS: 1 || NOT RECOMMENDED
var person = {
    name: "Sachin",
    age: 24,
};
// OBJECT: 2 || RECOMMENDED
var drink = {
    name: "Cold Coffee",
};
// ARRAYS
var strArray = ["Sachin"];
// TUPLES: Fixed length and fixed type array
// Push can still add elements in the tuple without throwing any error
var role = [2, "Author"];
// ENUM
// Assign numbers to each property (0: ADMIN, 1: AUTHOR)
// We can assign our own numbers ({ADMIN = 1} || {ADMIN = 'ADMIN'})
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["AUTHOR"] = 1] = "AUTHOR";
})(ROLE || (ROLE = {}));
var me = ROLE.ADMIN;
// ANY || Avoid as much as possible
// As the name says, it can be any type
var firstName = "Sachin";
firstName = 23;
// UNION
var flexibleArray = ["Sachin"];
flexibleArray = [2];
// LITERAL
var occupation;
occupation = "Frontend Developer";
var combinableVar = "Hello";
combinableVar = ["hello"];
// FUNCTIONS RETURNS TYPE
function calcAge(currentYear, birthYear) {
    return currentYear - birthYear;
}
// Functions can't return undefined
function returnNothing() {
    console.log("Hello");
}
// FUNCTIONS TYPE
var itIsFunction;
itIsFunction = function calcTax() { };
// Assign a specific function description type
var sumFunction;
sumFunction = function (num1, num2) {
    return num1 + num2;
};
// UNKNOWN TYPE
// Unknown is a better choice than any
// as we need to perform some type checking to asingn any value
var unknownVar = 5;
var lastName = "Hello";
typeof lastName === "string" ? (unknownVar = lastName) : "";
// NEVER TYPE
// Since it throws an error, it basically crashes the script
// It never returns and will never return anything
function generateError(message, code) {
    throw { message: message, code: code };
}
//# sourceMappingURL=types.js.map