// Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.

const employeeArray = [
    {
      id: 1,
      name: "abc",
      age: 26,
      salary: 450000,
    },
    {
      id: 2,
      name: "xyz",
      age: 22,
      salary: 270000,
    },
    {
      id: 3,
      name: "hgf",
      age: 32,
      salary: 670000,
    },
    {
      id: 4,
      name: "sry",
      age: 76,
      salary: 530000,
    },
  ];
  
  const returnArrayUsingPromises = (employeeArray) => {
    return new Promise((resolve, reject) => {
      if (Array.isArray(employeeArray)) {
        resolve(employeeArray);
      } else {
        reject("Not a valid array!");
      }
    });
  };
  
  returnArrayUsingPromises(employeeArray)
    .then((employeeArray) => {
      setTimeout(() => {
        console.log(employeeArray);
      }, 1500);
    })
    .catch((error) => {
      console.log(error);
    });
  
  
    
  // Create another promisified function that sorts this employee list from above response by name. Chain it to above promise
  
  const customSort = (a, b) => {
    if (a["name"] < b["name"]) return -1;
    else if (a["name"] > b["name"]) return 1;
    else return 0;
  };
  
  const sortEmployeeByName = (employeeArray) => {
    return new Promise((resolve, reject) => {
      if (Array.isArray(employeeArray)) {
        const newArray = employeeArray.sort(customSort);
        resolve(newArray);
      } else {
        reject("Not a valid array!");
      }
    });
  };
  
  returnArrayUsingPromises(employeeArray)
    .then((employeeArray) => sortEmployeeByName(employeeArray))
    .then((newArray) => {
      console.log(newArray);
    })
    .catch((error) => {
      console.log(error);
    });