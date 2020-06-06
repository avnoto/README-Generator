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
    default: 'None',
  },
  {
    message:
      'Please provide any proposed features for future development. If this does not apply, press Enter.',
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
    message:
      'Are there any authors or contributors you would like to credit? Please list names followed by a ";". If you want to credit a website, provide the website address in quotations.',
    type: 'input',
    name: 'projectAcknowledgements',
  },
];
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((res) => {
    writeToFile('readme.md', generateMarkdown({ ...res }));
  });
}

init();
