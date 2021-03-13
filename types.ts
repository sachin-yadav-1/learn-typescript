const num: number = 23;
const bool: boolean = true;
const str: string = "Hello";

// OBJECTS: 1 || NOT RECOMMENDED
const person: object = {
	name: "Sachin",
	age: 24,
};

// OBJECT: 2 || RECOMMENDED
const drink: {
	name: string;
} = {
	name: "Cold Coffee",
};

// ARRAYS
const strArray: string[] = ["Sachin"];

// TUPLES: Fixed length and fixed type array
// Push can still add elements in the tuple without throwing any error
const role: [number, string] = [2, "Author"];

// ENUM
// Assign numbers to each property (0: ADMIN, 1: AUTHOR)
// We can assign our own numbers ({ADMIN = 1} || {ADMIN = 'ADMIN'})
enum ROLE {
	"ADMIN",
	"AUTHOR",
}
const me = ROLE.ADMIN;

// ANY || Avoid as much as possible
// As the name says, it can be any type
let firstName: any = "Sachin";
firstName = 23;

// UNION
let flexibleArray: string[] | number[] = ["Sachin"];
flexibleArray = [2];

// LITERAL
let occupation: "Frontend Developer" | "Backend Developer";
occupation = "Frontend Developer";

// ALIASES
type Combinable = string | string[];
let combinableVar: Combinable = "Hello";
combinableVar = ["hello"];

// FUNCTIONS RETURNS TYPE
function calcAge(currentYear: number, birthYear: number): number {
	return currentYear - birthYear;
}

// Functions can't return undefined
function returnNothing(): void {
	console.log("Hello");
}

// FUNCTIONS TYPE
let itIsFunction: Function;
itIsFunction = function calcTax(): void {};

// Assign a specific function description type
let sumFunction: (a: number, b: number) => number;
sumFunction = function (num1: number, num2: number) {
	return num1 + num2;
};

// UNKNOWN TYPE
// Unknown is a better choice than any
// as we need to perform some type checking to asingn any value
let unknownVar: unknown = 5;
let lastName: string = "Hello";
typeof lastName === "string" ? (unknownVar = lastName) : "";

// NEVER TYPE
// Since it throws an error, it basically crashes the script
// It never returns and will never return anything
function generateError(message: string, code: number): never {
	throw { message, code };
}
