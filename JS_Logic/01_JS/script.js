const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  phoneNumbers: [
    { type: "home", number: "123-456-7890" },
    { type: "work", number: "987-654-3210" },
  ],
  isActive: true,
  hobbies: ["reading", "traveling", "gaming"],
  login: function () {
    console.log(`${this.firstName} has logged in.`);
  },
  logout: function () {
    console.log(`${this.firstName} has logged out.`);
  },
};

// Destructuring the user object
let { zipCode } = user.address;
console.log(zipCode); // Output: 10001

let { hobbies } = user;
console.log(hobbies[0]); // Output: ["reading", "traveling", "gaming"]

// spread and Rest
const names = ["Alice", "Bob", "Charlie"];

// it make names is equal to copynames
// so if we try to modify the copynames then the names will also be modified
const copynames = names;

// so we did that we used the spread operator
const copynames2 = [...names];

const smallObject = {
  name: "John",
  age: 30,
};

const newobj = { ...smallObject, city: "New York" };
console.log(newobj); // Output: { name: 'John', age: 30, city: 'New York' }

// rest operator
function sum(...args) {
  console.log(args); // Output: [1, 2, 3, 4, 5]
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
