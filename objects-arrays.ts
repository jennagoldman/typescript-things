const person = {
  name: 'Jenna',
  age: 31,
  hobbies: ['Coding', 'Baking', 'Reading']
};

let favoriteActivities: string[];
// can't assign string 'Baking' because hobbies is a string array
// favoriteActivities = 'Baking';
favoriteActivities = ['Baking'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}