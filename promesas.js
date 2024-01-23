let users = [
  {
    user: "user1",
    password: "nduiwh68tgyu",
    email: "mail@mail.com",
    read: true,
  },
  {
    user: "user2",
    password: "nduiwh68tgyu",
    email: "mail2@mail.com",
    read: true,
  },
  {
    user: "user3",
    password: "nduiwh68tgyu",
    email: "mail3@mail.com",
    read: true,
  },
];

const getUsers = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(users);
  }, 3000);
});

getUsers.then((users) => {
  console.log(users);
});
