function generateRepoName(projectName) {
  const repoName = projectName.split(' ').join('-');
  return `${repoName}`;
}

function generateMarkdown(data) {
  return `
  [![Issues][issues-shield]][issues-url]

  # ${data.projectName}

  Developed by: ${data.username}

  ## Table of Contents

  - [About the Project](#about-the-project)
    - [Built With](#built-with)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [License](#license)
  - [Support](#support)
    - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)

  ## About the Project

  ${data.projectDescription}

  ### Built With

  ${data.projectTools}

  ## Installation

  ${data.projectInstallation}

  ## Usage

  ${data.projectUsage}

  ## Roadmap

  Proposed features for future developement:

  ${data.projectRoadmap}

  ## Contributing

  ${data.projectContributingInstructions}

  ## License

  ${data.projectLicense}

  ## Support

  Please [open an issue](https://github.com/${data.username}/${generateRepoName(
    data.projectName
  )}/issues/new) for support.

  ### Contact

  Contact ${data.projectContact} with any questions or concerns.

  ## Acknowledgements

  ${data.projectAcknowledgements}
  
  `;
}

module.exports = generateMarkdown;
