module.exports = {
    PORT: process.env.PORT,
    DB: {
      user: "postgres",
      password: "mysecretpassword",
      database: "school_qa",
      host: "localhost",
      dialect: "postgres",
    },
  };