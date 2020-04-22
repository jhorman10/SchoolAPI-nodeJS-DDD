require('dotenv').config();

const PDN = require('./pdn');
const DEV = require('./dev');
const QA = require('./qa');

const { NODE_ENV } = process.env;

let currentEnvironment = DEV;

if (NODE_ENV === "pnd") {
    currentEnvironment = PDN;
} else if (NODE_ENV === "qa"){
    currentEnvironment = QA;
}

module.exports = currentEnvironment;