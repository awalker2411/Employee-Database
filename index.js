const inquirer = require(`inquirer`)
const db = require(`./db/connection`)
const data = require(`./db/query`)

const startQuestions = [
    {
        message: `Select an option below.`,
        type: `list`,
        name: `startQuestions`,
        choices: [
            `View all departments`,
            `View all roles`,
            `View all employees`,
            `Add department`,
            `Add a role`,
            `Add an employee`,
            `Update an employee role`,
            `---Exit Application---`
        ]
    }
]

function handleStartQuestions(){
    inquirer.prompt(startQuestions)
        .then(response => {
            switch(response.startQuestions){
                case `View all departments`:
                    viewDepartments()
                    break;
                case `View all roles`:
                    viewRoles()
                    break;
                case `View all employees`:
                    viewEmployees()
                    break;
                case `Add department`:
                    addDepartment()
                    break;
                case `Add a role`:
                    addRole();
                    break;
                case `Add an employee`:
                    addEmployee()
                    break;
                case `Update an employee role`:
                    updateEmployeeRole()
                    break;
                case `---Exit Application---`:
                    prompt.ui.close();
                default:
                    prompt.ui.close();
            }
        })
}