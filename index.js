<<<<<<< HEAD


  const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const PDF = require("html-pdf");
const options = { format: "Letter" };
const input = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username'
    },
    {
        type: 'list',
        name: 'favColor',
        message: 'What is your favorite color?',
        choices: [
            'green',
            'blue',
            'pink',
            'red',
            'orange',
            'purple'
        ]
    }
];
function prompt() {
    return inquirer.prompt(input);
}
function init() {
    prompt()
        .then(({ username, favoriteColor }) => {
            const queryURL = `https://api.github.com/users/${username}`;
            axios.get(queryURL)
                .then(res => {
                    res.data.color = favoriteColor;
                    const html = generateHTML(res.data);
                    PDF.create(html, options).toFile(`./${res.data.name}.pdf`, (err, res) => {
                        if (err) {
                            return console.log(err);
                        } else {
                            console.log(res);
                        }
                    });
                })
        })
}
=======


  const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const PDF = require("html-pdf");
const options = { format: "Letter" };
const input = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username'
    },
    {
        type: 'list',
        name: 'favColor',
        message: 'What is your favorite color?',
        choices: [
            'green',
            'blue',
            'pink',
            'red',
            'orange',
            'purple'
        ]
    }
];
function prompt() {
    return inquirer.prompt(input);
}
function init() {
    prompt()
        .then(({ username, favoriteColor }) => {
            const queryURL = `https://api.github.com/users/${username}`;
            axios.get(queryURL)
                .then(res => {
                    res.data.color = favoriteColor;
                    const html = generateHTML(res.data);
                    PDF.create(html, options).toFile(`./${res.data.name}.pdf`, (err, res) => {
                        if (err) {
                            return console.log(err);
                        } else {
                            console.log(res);
                        }
                    });
                })
        })
}
>>>>>>> e36bf408025fdc7243e27a6babfe3bf96978be33
init();