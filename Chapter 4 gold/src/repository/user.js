const users = [
  {
    name: "Adit",
    email: "adit@gmail.com",
    password: "Adit123",
  },
  {
    name: "han vir",
    email: "hanvir@gmail.com",
    password: "HanVir123",
  }
];

class UserRepository {
  constructor() {
    this.users = users;
  }

  getAll() {
    return this.users;
  }

  getByEmail(email) {
    return this.users.find(user => user.email === email)
  }

  // Buat tambah user ke list
  create(name, email, password) {
    users.push({name: name, email: email, password: password})
  }
}

module.exports = UserRepository;