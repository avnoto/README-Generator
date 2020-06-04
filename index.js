const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

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
            message: 'Enter a title for your project.',
            type: 'input',
            name: 'projectName',
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
              message:
                'What are the installation instructions? To break down instructions into a list, separate each step with a ";".',
              type: 'input',
              name: 'projectInstallation',
            },
            {
              message: 'How do you use the program?',
              type: 'input',
              name: 'projectUsage',
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
                'Please provide any proposed features for future development. If this does not apply, press Enter.',
              type: 'input',
              name: 'projectRoadmap',
            },
            {
              message:
                'Provide an email address so that the user can contact with you with any questions.',
              type: 'input',
              name: 'projectContact',
            },
            {
              message:
                'Are there any authors or contributors you would like to credit? Please list names followed by a ";". If you want to credit a website, provide the website address in quotations.',
              type: 'input',
              name: 'projectAcknowlegements',
            },
          ]);
          // .then(function (data) {
          //   const fileName = data.projectName;
          // });
        });
    });
  });

// function writeToFile(fileName, data) {
//   fs.writeFile('README.md', data, (err) => {
//     if (err) throw err;

//     console.log('READ.me saved!');
//   });
// }
