//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//'BSD', 'MIT', 'GNU GPL'
function renderLicenseBadge(license) {
  let badge = '';
  switch(license){
    case 'BSD':
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPL':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    default:
      badge = '';    
  }
  return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ''
  switch(license){
    case 'BSD':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU GPL':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      link = '';    
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license || license === 'none' ){
    return '';
  }
  else{
    return `
    # License
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `;
  }
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  https://github.com/${data.github}/${data.title}

  # Description
  ${data.description}
  # Table of Contents
  * [installation](#Installation)
  * [usage](#Usage)
  * [contributions](#Contributions)
  * [tests](#Tests)
  * [contact](#Contact)
  * [licence](#License)

  # Installation
  The following are required for this app to function:
  ${data.installation}
  # Usage
  ${data.usage}
  # Contributions
  ${data.contributions}
  # Tests
  How to test:
  ${data.tests}
  # Contact
  Contact at ${data.email}

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
