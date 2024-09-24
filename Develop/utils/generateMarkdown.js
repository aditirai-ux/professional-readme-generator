// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Reference for license badge and links: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GNU GPLv3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "ISC") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU GPLv3") {
    return `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "Apache 2.0") {
    return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "ISC") {
    return `[ISC](https://opensource.org/licenses/ISC)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed under the MIT license.`;
  } else if (license === "GNU GPLv3") {
    return `This project is licensed under the GNU GPLv3 license.`;
  } else if (license === "Apache 2.0") {
    return `This project is licensed under the Apache 2.0 license.`;
  } else if (license === "ISC") {
    return `This project is licensed under the ISC license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
// headings and structure of readme file taken from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
function generateMarkdown(questions) {
  return `
  # ${questions.title}
  ## Description
  ${questions.description};
  ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
  ## Installation
  ${questions.installation}
  ## Usage 
  ${questions.usage}
  ## Credits
   This project was created by ${questions.credit} for the CU Coding Bootcamp.
  ## Contributing
  ${questions.contribution}
  ## Tests
  ${questions.test}
  ## License
  ${renderLicenseSection(questions.license)};
  ${renderLicenseBadge(questions.license)};
  ${renderLicenseLink(questions.license)};
  ## Questions
  If you have any further questions, please contact me at:
    - GitHub: [Github](#${questions.github})
    - Email: ${questions.email}`;
}

export default generateMarkdown;
