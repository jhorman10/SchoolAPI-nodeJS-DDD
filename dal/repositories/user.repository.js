class UserRepository {
  constructor({ db }) {
    this.db = db;
  }

  getUsers() {
    return this.db.users.findAll();
  }

  createUsers(user) {
    return this.db.users.create(user);
  }
}

module.exports = UserRepository;