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
      inquirer
        .prompt([
          {
            message:
              'Which repository would you like to make the README.md for?',
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
          },
        ])

        .then(function () {
          inquirer.prompt([
            {
              message: 'What are the installation instructions?',
              type: 'input',
              name: 'projectInstallation',
            },
            {
              message: 'What tools were used for your project?',
              type: 'checkbox',
              name: 'projectTools',
              choices: [
                'HTML',
                'CSS',
                'Bootstrap',
                'Javascript',
                'jQuery',
                'AJAX',
                'Node.js',
                'APIs',
                'JSON',
              ],
            },
            {
              message: 'How do you use the program?',
              type: 'input',
              name: 'projectUsage',
            },
            {
              message:
                'What are the support instructions? If there are none, press Enter.',
              type: 'input',
              name: 'projectSupportInstructions',
            },
            {
              message:
                'What are the contributing instructions? If there are none, press Enter.',
              type: 'input',
              name: 'projectContributingInstructions',
            },
            {
              message:
                'How is your project licensed? If this does not apply, press Enter.',
              type: 'input',
              name: 'projectLicense',
            },
            {
              message:
                'Provide an email address so that the user can contact with you with any questions or concerns.',
              type: 'input',
              name: 'projectContact',
            },
            {
              message:
                'Provide an email address so that the user can contact with you with any questions or concerns.',
              type: 'input',
              name: 'projectContact',
            },
          ]);
        });
    });
  });
