class UserController {
  constructor({ UserService }) {
    this.UserService = UserService;
  }
  sayHello(request, response) {
    return response.send({ message: "Hello World" });
  }

  async getUsers(){
    return await this.UserService.getUsers();
  }
}

module.exports = UserController;
