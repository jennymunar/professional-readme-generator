// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license){
  let licenseBadge = "";
  if (license === "mit") {
  licenseBadge = "[![License: mit](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)";
} else {
  licenseBadge = "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
}
return licenseBadge;
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "mit"){
  licenseLink = "[mit](https://opensource.org/license/mit)" 
  } else {
  licenseLink = "[apache](https://opensource.org/licenses/Apache-2.0)"

}
  return licenseLink;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
    return `# ${data.title}
## Badge
${licenseBadge}
 
## Description

${data.description}
    
## Table of Contents
- [Installation](#installation)
- [Contribution](#contribution)
- [Questions](#questions)
- [License](#license)    

## Installation
    
${data.installation}

## Contributions
    
${data.contribution}
    
## Questions
    
If you have any questions feel free to connect with me: https://www.github.com/${data.github} or send me and email at: ${data.email}

## License
${licenseLink} 
 
`
  ;}

  module.exports = generateMarkdown;

