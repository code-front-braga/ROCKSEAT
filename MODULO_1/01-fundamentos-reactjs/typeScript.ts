interface User {
  name: string;
  bio: string;
  age: number;
}

function sumAge(users: User[]) { // Pode ser assim: Array<User>
  let sum = 0;

  for (const user of users) {
    sum += user.age;
  }
  return sum;
}

const sumOfAllUserAges = sumAge([
  {
    name: 'Leonardo',
    bio: 'Estudante de Programação',
    age: 33,
  },
]);
