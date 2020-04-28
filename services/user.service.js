const { toDomainEntity } = require("../domain/mappers");
const { toDbEntity } = require("../dal/mappers");

class UserService {
  constructor({ UserRepository }) {
    this.UserRepository = UserRepository;
  }
  async getUsers() {

    const users = await this.UserRepository.getUsers();
    // do something

    return users.map(toDomainEntity);
  }

  async createUsers(user) {
    user = toDbEntity(user);
    const createdUser = await this.UserRepository.createUsers(user);
    return createdUser;
  }
}

module.exports = UserService;
