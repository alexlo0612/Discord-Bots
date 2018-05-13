//Require Dependencies
const discord = require("discord.js");
const fs = require("fs");
//Config Files
const login_config = require("./config.json");
//Initialize Bot
const client = new discord.Client();

//Auth Bot
client.login(login_config.token);
