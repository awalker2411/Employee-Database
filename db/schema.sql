DROP DATABASE IF EXISTS company_db
CREATE DATABASE company_db

USE company_db

CREATE TABLE department(
    dept_id INT NOT NULL AUTO_INCREMENT
    dept_name VARCHAR(50) NOT NULL
    PRIMARY KEY (dept_id)
)

CREATE TABLE role(
    role_id INT NOT NULL AUTO_INCREMENT
    role_title VARCHAR(50) NOT NULL
    role_salary
    role_dept_id INT
    FOREIGN KEY (role_dept_id) REFERENCES department(dept_id)
    PRIMARY KEY (role_id)
)

CREATE TABLE employee(
    emp_id INT NOT NULL AUTO_INCREMENT
    first_name VARCHAR(50) NOT NULL
    last_name VARCHAR(50) NOT NULL
    emp_role_id INT
    manager_id INT
    FOREIGN KEY (emp_role_id) REFERENCES role(role_id)
    FOREIGN KEY (manager_id) REFERENCES employee(emp_id)
)