import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@yopmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane User",
    email: "jane@yopmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
