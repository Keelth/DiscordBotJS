console.clear();

const Client = require("./Structures/Client.js");

require('dotenv').config(); 

const client = new Client();

console.log(process.env.TOKEN);

client.start(process.env.TOKEN);

