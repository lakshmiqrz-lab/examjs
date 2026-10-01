const employees = [
    { id: 1, name: "John", position: "Manager", salary: 60000, hired: true },
    { id: 2, name: "Sarah", position: "Developer", salary: 50000, hired: true },
    { id: 3, name: "Tom", position: "Designer", salary: 45000, hired: false },
    { id: 4, name: "Anna", position: "Tester", salary: 40000, hired: true },
    { id: 5, name: "Jack", position: "Developer", salary: 55000, hired: false }
];
// Questions:

// 1.Print all employee positions.
// 2.Find the name of the employee with the highest salary.
// 3.List all employees who are not hired.
// 4.Write a function to add a new employee to the list.
// 5.Write a function to remove an employee by their ID.
// 6.Create a function to update an employee’s salary.
// 7.List all employees with the position "Developer".
// 8.Calculate the total salary of all hired employees.


// -------------------------------------------------------------------------

// 1.Print all employee positions.

// employees.filter(emp=>emp.hired==true).forEach(emp=>console.log(emp.position));

// 2.Find the name of the employee with the highest salary.

// let highest=employees[0];
// for(let emp of employees){

//     if(emp.salary>highest.salary){
//         highest=emp;
//     }
// }
// console.log(highest.name);

//3.List all employees who are not hired.
// employees.filter(emp=>emp.hired==false).forEach(emp=>console.log(emp.name));

// 4.Write a function to add a new employee to the list.

// function addEmployee(employee){
//     employees[employees.length] =employee;
// }
// addEmployee({
//     id: 6,
//     name: "Mike",
//     position: "Developer",
//     salary: 48000,
//     hired: true
// });
// console.log(employees);

// 7.List all employees with the position "Developer".
// employees.filter(emp=>emp.position=="Developer").forEach(emp=>console.log(emp.name));


// 8.Calculate the total salary of all hired employees.

// let sum =0;
// employees.forEach(emp=>{
//     if (emp.hired== true){
//         sum = sum+emp.salary;
//     }
// });
// console.log(sum);


// // 6.Create a function to update an employee’s salary.

// function updateSalary(id, salary){
//     for (let i=0; i<employees.length; i++){
//         if (employees[i].id== id){
//             employees[i].salary=salary;
//    }
//  }
// }
// updateSalary(2, 60000);
// console.log(employees); 


