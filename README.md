<h1 id="home">Homework :clipboard:</h1>

## ts-hw-module-2

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

# Generic

The purpose of this task is to help you understand and apply generics in TypeScript. You will work with functions that return promises, use the built-in Pick type, combine objects using generics, and solve type problems in classes.

### Task 1

There is a getPromise() function that returns the promise allowed in an array containing strings and numbers. Complement this function using generics so that it returns the correct type.

```ts
function getPromise() {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
```

### Task 2

You have an AllType type. There is a compare function that accepts two objects. These objects contain AllType fields. Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType. The compare function should return AllType.

```ts
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
```

### Task 3

You have a merge function that combines two objects. Use generics to indicate that these objects can be of any type.

```ts
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
```

### Task 4

Use generics and interfaces to fix the error in the following classes:

```ts
class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}
```

### Task 5

You need to implement the KeyValuePair interface, which describes a key-value pair. Use generics so that this interface can work with all key and value types.

```ts
interface KeyValuePair {
  key;
  value;
}
```

### Task 6

You have a user registration form. Sometimes you need to pre-fill the form with the user's data to update his profile. However, you don't always need to fill in all the fields. For example, the user may want to update only his email and password, leaving the first and last name unchanged.

Correct the type in the function argument so that there are no type errors.

```ts
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User) {
  // User update
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
```

### Task 7

You have a UserRole enumeration that is used to classify users in your application. You want to create a RoleDescription object that maps each user role to its description.

```ts
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Replace the following code with the version using Record
const RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
```

### Task 8

You have a Form type that contains information about the form, including an errors field. You want to create a new Params type that includes all fields from the Form except errors.

```ts
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params to disable the 'errors' field from the Form type
type Params = Form;
```

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Generic

Мета цього завдання - допомогти вам зрозуміти та застосувати generics у TypeScript. Ви працюватимете з функціями, що повертають проміси, використовувати вбудований тип Pick, об'єднувати об'єкти за допомогою generics, а також вирішувати проблеми типів у класах.

### Завдання 1

Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.

```ts
function getPromise() {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
```

### Завдання 2

У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType. Функція compare повинна повертати AllType.

```ts
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
```

### Завдання 3

У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

```ts
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
```

### Завдання 4

Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

```ts
class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}
```

### Завдання 5

Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.

```ts
interface KeyValuePair {
  key;
  value;
}
```

### Завдання 6

Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.

Виправте тип у аргументі функції так, щоб не було помилок типу.

```ts
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User) {
  // Оновлення користувача
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
```

### Завдання 7

У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.

```ts
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
```

### Завдання 8

У вас є тип Form, який містить інформацію про форму, включаючи поле errors. Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.

```ts
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Form;
```

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Generic

Цель этой задачи – помочь вам понять и применить generics в TypeScript. Вы будете работать с возвращающими промесами функциями, использовать встроенный тип Pick, объединять объекты с помощью generics, а также решать проблемы типов в классах.

### Задание 1

Есть функция getPromise(), которая возвращает промисс, разрешаемый в массив, содержащий строки и числа. Дополните эту функцию, используя generics, чтобы она возвращала правильный тип.

```ts
function getPromise() {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
```

### Задание 2

У вас есть тип AllType. Существует функция compare, принимающая два объекта. Эти объекты содержат поля AllType. Ваша задача – использовать Pick и generics для указания, что поля этих объектов принадлежат AllType. Функция compare должна возвращать AllType.

```ts
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
```

### Задание 3

У вас есть функция merge, объединяющая два объекта. Используйте generics, чтобы указать, что эти объекты могут быть любого типа.

```ts
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
```

### Задание 4

Используйте generics и интерфейсы, чтобы исправить ошибку в следующих классах:

```ts
class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}
```

### Задание 5

Вам нужно реализовать интерфейс KeyValuePair, описывающий пару ключ-значения. Используйте generics, чтобы этот интерфейс мог работать с любыми типами ключей и значений.

```ts
interface KeyValuePair {
  key;
  value;
}
```

### Задание 6

Вы имеете форму регистрации пользователей. Иногда необходимо предварительно заполнить форму пользовательскими данными для обновления его профиля. Однако вам не всегда нужно заполнить все поля. К примеру, пользователь может хотеть обновить только свой email и пароль, оставив имя и фамилию без изменений.

Исправьте тип в аргументе функции так, чтобы не было ошибок типа.

```ts
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User) {
  // Обновление пользователя
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
```

### Задание 7

У вас есть список UserRole, который используется для классификации пользователей в вашем приложении. Вы хотите создать объект RoleDescription, который будет сопоставлять каждую роль пользователя с ее описанием.

```ts
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замените следующий код на версию с помощью Record
const RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
```

### Задание 8

У вас есть тип Form, содержащий информацию о форме, включая поле errors. Вы хотите создать новый тип Params, который включает в себя все поля из Form, кроме errors.

```ts
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реализуйте Params так, чтобы исключить поле 'errors' из типа Form
type Params = Form;
```
