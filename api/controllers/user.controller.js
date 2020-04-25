class UserController {
  constructor({ UserService }) {
    this.UserService = UserService;
  }
  async getUsers(request, response) {
    const users = await this.UserService.getUsers();
    return response.send({ 
      error: false, 
      payload: users 
    });
  }

  async createUsers(request, response) {
    const { body } = request
    const createdUser = await this.UserService.createUsers(body);
    return response.send({
      error: false,
      payload: createdUser
    });
  }
}

module.exports = UserController;
