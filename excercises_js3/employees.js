function assignEmployees(employeeList) {
    for (const employeeListElement of employeeList) {
        let length = employeeListElement.length
        let name = employeeListElement

        let current_employee = createEmployee(name, length)
        current_employee.printBatch()
    }

    function createEmployee(name, personalNumber) {
        let employee = {
            name: name,
            personalNumber: personalNumber,
            printBatch() {
                console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`)
            }
        }

        return employee
    }


}

assignEmployees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])