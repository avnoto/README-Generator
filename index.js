const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const path = require('path');

const questions = [
  {
    message: 'Enter your GitHub username',
    name: 'username',
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
    default: 'None',
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
    message: 'What are the installation instructions?',
    type: 'input',
    name: 'projectInstallation',
    default: 'None',
  },
  {
    message: 'How do you use the program?',
    type: 'input',
    name: 'projectUsage',
    default: 'None',
  },

  {
    message: 'What are the contributing instructions?',
    type: 'input',
    name: 'projectContributingInstructions',
    default: 'None',
  },
  {
    message: 'How is your project licensed?',
    type: 'input',
    name: 'projectLicense',
    default: 'None',
  },
  {
    message: 'Please provide any proposed features for future development.',
    type: 'input',
    name: 'projectRoadmap',
    default: 'None',
  },
  {
    message:
      'Provide an email address so that the user can contact with you with any questions.',
    type: 'input',
    name: 'projectContact',
  },
  {
    message: 'Are there any authors or contributors you would like to credit?',
    type: 'input',
    name: 'projectAcknowledgements',
    default: 'None',
  },
];
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((res) => {
    writeToFile('README.md', generateMarkdown({ ...res }));
  });
}

init();
