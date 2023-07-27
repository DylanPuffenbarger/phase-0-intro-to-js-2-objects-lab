const employee = {
    name : 'Dylan',
    streetAddress : '46 Beacon'
};

function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    const employee_copy = {...employeeObject};
    employee_copy[key] = value;
    return employee_copy
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    employeeObject[key] = value;
    return employeeObject;
}

function deleteFromEmployeeByKey(employeeObject, key){
    const employee_copy = {...employeeObject};
    delete employee_copy[key];
    return employee_copy;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key){
    delete employeeObject[key];
    return employeeObject;
}