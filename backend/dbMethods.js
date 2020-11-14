import faker from "faker";
export const getEmployeeDb = (id) => {
  let employee = {
    id: id,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
    phoneNumber: faker.phone.phoneNumber(),
    gender: faker.name.gender(),
    company: faker.company.companyName(),
    state: faker.address.state(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    about: faker.lorem.paragraph(),
  };
  return employee;
};

export const getEmployeesDb = () => {
  let employees = [getEmployee("5")];
  employees.push(getEmployee("4"));
  employees.push(getEmployee("6"));
  employees.push(getEmployee("9"));
  employees.push(getEmployee("1"));
  return employees;
};
