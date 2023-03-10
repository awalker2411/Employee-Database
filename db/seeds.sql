INSERT INTO department(dept_name)
VALUES 
    (`Legal`),
    (`Sales`),
    (`IT`),
    (`HR`);

INSERT INTO role(role_title, role_salary, role_dept_id)
VALUES 
    (`Lawyer`, 130000, 1),
    (`Sales Associate`, 50000, 2),
    (`Technician`, 75000, 3),
    (`Specialist`, 65000, 4);

INSERT INTO employee(first_name, last_name, emp_role_id, manager_id)
VALUES
    (`Chris`, `Mckee`, 1, 1),
    (`Austin`, `Clark`, 2, NULL),
    (`Nick`, `Richter`, 2, 2),
    (`Anthony`, `Walker`, 3, 3),
    (`Chris`, `Miller`, 3, 3),
    (`Nate`, `Fults`, 4, 4);
