const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

//function writeToFile(fileName, data) {}

inquirer
  .prompt([
    {
      message: 'Enter your GitHub username',
      name: 'username',
    },
  ])
  .then(function ({ username }) {
    const queryURL = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryURL).then(function (response) {
      const repos = response.data;
      const repoNames = repos.map((repo) => repo.name);
      inquirer.prompt([
        {
          message: 'Which repository would you like to make the README.md for?',
          type: 'checkbox',
          name: 'githubRepos',
          choices: function () {
            return repoNames;
          },
        },
        {
          message:
            'Is the name of your project the same as your repository name?',
          type: 'confirm',
          default: true,
          name: 'projectNameSame',
        },
        {
          message: 'Enter a different title for your project.',
          type: 'input',
          name: 'projectNameGithub',
          when: function (data) {
            return data.projectNameSame === false;
          },
        },
        {
          message: 'Enter a description for your project.',
          type: 'input',
          name: 'projectDescription',
          when: function (data) {
            return (
              data.projectNameGithub === false || data.projectNameSame === true
            );
          },
        },
      ]);
    });
  });
