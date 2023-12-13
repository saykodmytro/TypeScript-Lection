// ******************** Index Properties ********************

// type Goods = {
//   [key: string]: number;
// };

// type Fruits = {
//   apple: number;
//   banana: number;
//   orange: number;
// };

// const fruits: Goods = {
//   apple: 12,
//   banana: 14,
//   orange: 5,
// };

// type FrozenGoods = {
//   iceCrea: number;
//   fish: number;
//   berry: number;
// };

// const frozenGoods: Goods = {
//   iceCrea: 34,
//   fish: 14,
//   berry: 54,
// };

// ******************** Task ********************

// Створити інтерфуйс для обєкта, де ключем є рядок, а значенням може бути або рядок або число.
// Створіть декілька обєктів цього типу

// type MixeType = {
//   [key: string]: string | number;
// };

// const userInfo: MixeType = {
//   name: "Bob",
//   age: 22,
//   country: "UK",
// };

// const bookDetails: MixeType = {
//   title: "Bible",
//   pageCount: 350,
// };

// ******************** Generics ********************

// Створити загальні функції , класи , що можуть працювати з різними вхідними типами і зберігати типізацію

// function identity<T>(arg: T) {
//   return arg;
// }
// let output1 = identity<string>("myString");
// function ident<string>(arg: string): string {
//   return arg;
// }

// let output2 = identity<number>(100);
// function ident<number>(arg: number): number {
//   return arg;
// }

// ******************** Task ********************

// Створіть загальну ф-ю reverse , яка приймає масив будь-якого типу
// і повертає масив у зворотньому порядку

// function reverse<K>(items: K[]): K[] {
//   return items.reverse();
// }

// let numbers = reverse<number>([1, 2, 3, 4, 5]);
// console.log("numbers: ", numbers); // [5,4,3,2,1]

// ******************** extends \\ key of ********************

// function lengthOfObject<T extends { length: number }>(obj: T): number {
//   return obj.length;
// }

// const obj = lengthOfObject({ name: "Eart", length: 10 });

// ******************** Task ********************

// Створіть загальну ф-ю getProperty, яка приймає обєкт та ключ як рядок.
// Ф-я повинна повертати значення цього ключа з обєкта

// const student = {
//   name: "Ivan",
//   age: 25,
// };

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// let studentName = getProperty(student, "name");
// console.log("studentName: ", studentName); // "Ivan"

// let studentAddress = getProperty(student, "adress");
// console.log("studentName: ", studentName); // undefined

// ******************** Partial <T> ********************

// type Todo = {
//   title: string;
//   description: string;
//   completed: boolean;
// };
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
//   return { ...todo, ...fieldsToUpdate };
// }
// const todo1: Todo = {
//   title: "Learn TypeScript",
//   description: "Study the basics of TypeScript",
//   completed: false,
// };
// const todo2 = updateTodo(todo1, {
//   description: "Study generics in TypeScript",
// });
// console.log(todo2);

// ******************** ReadOnly ********************

// type User = {
//   name: string;
//   age: number;
// };

// const john: Readonly<User> = {
//   name: "John",
//   age: 30,
// };

// john.age = 31; // Помилка: Неможливо змінити 'age', тому що воно є лише для читання.

// const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbers.push(6); // Помилка: Property 'push' does not exist on type 'readonly number[]'.
// numbers[0] = 0; // Помилка: Index signature in type 'readonly number[]' only permits reading.

// ******************** Pick ********************

// // Pick<T, K>
// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };
// type PersonSummary = Pick<Person, "name" | "age">;
// // type PersonSummary = {
// //   name: string;
// //   age: number;
// // };
// const johnSummary: PersonSummary = {
//   name: "John",
//   age: 30,
// };
// // Це спрацює, тому що 'address' не є частиною типу 'PersonSummary'
// const invalidPerson: PersonSummary = {
//   name: "Anna",
//   age: 25,
//   address: "123 Main St", // Помилка тут
// };

// ******************** Omit ********************

// Omit<T, K>
// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };
// type PersonWithoutAddress = Omit<Person, "address">;
// const john: PersonWithoutAddress = {
//   name: "John",
//   age: 30,
//   // address: "123 Main St" // Ця властивість тут не допустима
// };
// function getPromise(): Promise<(string | number)[]> {
//   return new Promise<(string | number)[]>((resolve) => {
//     resolve(["Text", 50]);
//   });
// }
// getPromise().then((data) => {
//   console.log(data);
// });
// interface;
// interface Person {
//   firstName: string;
//   lastName: string;
//   getFullName(): string;
// }
// const john: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// ******************** Record ********************

// Record<K, T>
// type CityDatabase = Record<string, number>;
// const database: CityDatabase = {
//   Kyiv: 2884000,
//   Kharkiv: 1441000,
//   Odesa: 1015000,
// };
// // Додаємо новий запис в базу даних, де ключ (ім'я міста) має тип string, а значення (населення) має тип number
// database.Lviv = 721301;

// ******************** RRRRR ********************
