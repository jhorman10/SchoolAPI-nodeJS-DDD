const { asClass, createContainer, asFunction, asValue } = require("awilix");

const StartUp = require("./startUp");

const Server = require("./server");

const container = createContainer();

container.register({
  app: asClass(StartUp).singleton(),
  server: asClass(Server).singleton(),
});

module.exports = container;
