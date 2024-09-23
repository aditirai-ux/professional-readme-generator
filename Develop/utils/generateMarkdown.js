// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `## License
    This project is licensed under the MIT license.`;
  } else if (license === "GNU GPLv3") {
    return `## License
    This project is licensed under the GNU GPLv3 license.`;
  } else if (license === "Apache 2.0") {
    return `## License
    This project is licensed under the Apache 2.0 license.`;
  } else if (license === "ISC") {
    return `## License
    This project is licensed under the ISC license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}`;
}
// // headings and structure of readme file taken from https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
// const generateMarkdown = (data) => {
//   return `# ${data.title}
//   ## Description
//   ${data.description}
//   ## Installation
//   ${data.installation}
//   * [Usage](#usage)
//   * [License]
//   * ${renderLicenseSection(license)}
//   * [Contributing](#contributing)
//   * [Tests](#tests)
//   * [Questions](#questions)
//   * [Contact](#contact)
//   * [Credits](#credits)
//   * [Badges](#badges)
//   * [Features](#features)`;
// };

export default generateMarkdown;
