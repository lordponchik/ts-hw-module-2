// task-01

function getPromise(): Promise<[string, number]> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

// task-02

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// task-03

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

// task-04

class Component<T> {
  constructor(public props: T) {}
}

interface PageProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// task-05

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// task-06

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

// task-07

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleDesc = Record<UserRole, string>;

const RoleDescription: UserRoleDesc = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

// task-08

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

type Params = Omit<Form, "errors">;

export {};
