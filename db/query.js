const connection = require(`./connection`)

class Data {
    constructor (connection){
        this.connection = connection
    }

    async viewAllDepartments(){
        const query = await connection()
        const [ rows, fields ] = await query.execute(`SELECT * FROM department`)
        return rows
    }

    async viewAllRoles(){
        const query = await connection()
        const [ rows, fields ] = await query.execute(
            `SELECT
                role.role_id, role.role_title, role.role_salary, dept_name AS department
            FROM
                role
                INNER JOIN department ON role.role_dept_id = department.dept_id`
        )
        return rows
    }

    async viewAllEmployees(){
        const query = await connection();
        const [ rows, fields ] = await query.execute(
            `SELECT
                employee.employee_id, employee.first_name, employee.last_name, role.role_title AS role, dept_name AS department, role.role_salary
            From
                employee
                LEFT JOIN role ON employee.emp_role_id = role.role_id
                LEFT JOIN department ON role.role_dept_id = department.dept_id`
        )
        return rows
    }

    async addDepartment(deptName){
        const query = await connection()
        const [ rows, fields ] = await query.execute(
            `INSERT INTO department (dept_name) VALUES (?)`, 
            [deptName]
        )
    }

    async addRole(roleTitle, roleSalary, roleDeptID){
        const query = await connection()
        const [ rows, fields ] = await query.execute(
            `INSERT INTO role (role_title, role_salary, role_dept_id) VALUES (?, ?, ?)`,
            [roleTitle, roleSalary, roleDeptID]
        )
    }

    async addEmployee(firstName, lastName, roleID, managerID){
        const query = await connection()
        const [ rows, fields ] = await query.execute(
            `INSERT INTO employee (first_name, last_name, emp_role_id, manager_id) VALUES (?, ?, ?, ?)`,
            [firstName, lastName, roleID, managerID]
        )
    }

    async updateEmployeeRole(employeeID, roleID){
        const query = await connection()
        const [ rows, fields ] = await query.execute(
            `UPDATE employee SET emp_role_id = ? WHERE emp_id = ?`,
            [roleID, employeeID]
        )
    }
}

module.exports = Data