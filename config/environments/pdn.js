module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: "postgres",
    password: "mysecretpassword",
    database: "school",
    host: "localhost",
    dialect: "postgres",
  },
};
