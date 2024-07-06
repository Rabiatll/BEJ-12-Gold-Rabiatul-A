class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAll() {
    const users = this.userRepository.getAll();

    return users;
  }

  getByEmail(email) {
    const user = this.userRepository.getByEmail(email);

    if (user === undefined) {
      return null;
    }

    return user;
  }

  create(name, email, password) {
    this.userRepository.create(name, email, password)
  }
}

module.exports = UserService;