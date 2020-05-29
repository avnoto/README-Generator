const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

//const questions = [];

//function writeToFile(fileName, data) {}

inquirer
  .prompt({
    message: 'Enter your GitHub username',
    name: 'username',
  })
  .then(function ({ username }) {
    const queryURL = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryURL).then(function (response) {
      const repos = response.data;
      const repoNames = repos.map((repo) => repo.name);
      const repoNamesAsText = repoNames.join('\n'); //converts strings in array as text
      console.log(repoNamesAsText);
    });
  })
  .then(function () {
    inquirer.prompt([
      {
        type: 'confirm',
        message:
          'Would you like to create a README for one of these repositories?',

        name: 'repoNames',
        default: false,
      },
    ]);
  });
