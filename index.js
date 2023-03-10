const inquirer = require(`inquirer`)
const connection = require("./db/connection")
const Data = require(`./db/query`)
const newData = new Data(connection)

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

const addDeptQuestions = [
    {
        message: `Please input a new department name.`,
        type: `input`,
        name: `addDeptQ`
    }
]

const addRoleQuestions = [
    {
        message: `Please input title of new role.`,
        type: `input`,
        name: `roleT`
    },
    {
        message: `Please input salary of new role.`,
        type: `input`,
        name: `roleS`
    },
    {
        message: `Please input the department ID that this role belongs to.`,
        type: `input`,
        name: `roleI`
    }
]

const addEmpQuestions = [
    {
        message: `Please input the first name of the employee.`,
        type: `input`,
        name: `firstName`
    },
    {
        message: `Please input the last name of the employee.`,
        type: `input`,
        name: `lastName`
    },
    {
        message: `Please input the employee role ID.`,
        type: `input`,
        name: `empRoleID`
    },
    {
        message: `Please input the employee's manager ID.`,
        type: `input`,
        name: `empManID`
    }
]

const updateEmpRoleQuestions = [
    {
        message: `Please input the ID of the employee that you wish to update.`,
        type: `input`,
        name: `empID`
    },
    {
        message: `Please input the role ID of the new role you wish for this employee to have.`,
        type: `input`,
        name: `roleID`
    }
]

const viewDept = async() => {
    const info = await newData.viewAllDepts()
    console.table(info)
    handleStartQuestions()
}

const viewRoles = async() => {
    const info = await newData.viewAllRoles()
    console.table(info)
    handleStartQuestions()
}

const viewEmp = async() => {
    const info = await newData.viewAllEmp()
    console.table(info)
    handleStartQuestions()
}

const addDept = async() => {
    inquirer.prompt(addDeptQuestions)
        .then(async response=>{
            const newDept = await newData.addDeptData(response.addDeptQ)
            const info = await newData.viewAllDepts()
            console.table(info)
            console.log(response.addDeptQ+` added to departments.`)
            handleStartQuestions()
        })
}

const addRole = async() => {
    inquirer.prompt(addRoleQuestions)
        .then(async response=>{
            const newRole = await newData.addRoleData(response.roleT, response.roleS, response.roleI)
            const info = await newData.viewAllRoles()
            console.table(info)
            console.log(response.roleT+`, `+response.roleS+`, and `+response.roleI+` added to roles.`)
            handleStartQuestions()
        })
}

const addEmp = async() => {
    inquirer.prompt(addEmpQuestions)
        .then(async response=>{
            const newEmp = await newData.addEmpData(response.firstName, response.lastName, response.empRoleID, response.empManID)
            const info = await newData.viewAllEmp()
            console.table(info)
            console.log(response.firstName+` `+response.lastName+` added to employee database.`)
            handleStartQuestions()
        })
}

const updateEmpRole = async() => {
    inquirer.prompt(updateEmpRoleQuestions)
        .then(async response=>{
            const updateEmp = await newData.updateEmployeeRole(response.empID, response.roleID)
            const info = await newData.viewAllEmp()
            console.table(info)
            console.log(`Employee with the ID of `+response.empID+` now has the role ID of `+response.roleID+`.`)
            handleStartQuestions()
        })
}

function handleStartQuestions(){
    inquirer.prompt(startQuestions)
        .then(response=>{
            switch(response.startQuestions){
                case `View all departments`:
                    viewDept()
                    break;
                case `View all roles`:
                    viewRoles()
                    break;
                case `View all employees`:
                    viewEmp()
                    break;
                case `Add department`:
                    addDept()
                    break;
                case `Add a role`:
                    addRole();
                    break;
                case `Add an employee`:
                    addEmp()
                    break;
                case `Update an employee role`:
                    updateEmpRole()
                    break;
                case `---Exit Application---`:
                    prompt.ui.close();
                default:
                    prompt.ui.close();
            }
        })
}

handleStartQuestions()