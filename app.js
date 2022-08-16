let id = 999;
let ghazi = {
    employeeID: 0,
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    salary: function (min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
          },
    uniqueID: function () {
            this.employeeID = id + 1;
            id++;
        }
    };
let lana = {
        employeeID: 0,
        fullName: "Lana Ali",
        department: "Finance",
        level: "Senior",
        salary: function (min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
          },
          uniqueID: function() {
            this.employeeID = id + 1;
            id++;
        }
};
let tamara = {
        employeeID: 0,
        fullName: "Tamara Ayoub",
        department: "Marketing",
        level: "Senior",
        salary: function (min, max) {
                return Math.floor(Math.random() * (max - min) ) + min;
              },
              uniqueID: function() {
                this.employeeID = id + 1;
                id++;
            }
};

let safi = {
    employeeID: 0,
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqueID: function() {
        this.employeeID = id + 1;
        id++;
    }
};

let omar = {
    employeeID: 0,
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqueID: function() {
        this.employeeID = id + 1;
        id++;
    }
};

let rana = {
    employeeID: 0,
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqueID: function() {
        this.employeeID = id + 1;
        id++;
    }
};

let hadi = {
    employeeID: 0,
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    salary: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      },
      uniqueID: function() {
        this.employeeID = id + 1;
        id++;
    }
};

ghazi.uniqueID();
lana.uniqueID();
tamara.uniqueID();
safi.uniqueID();
omar.uniqueID();
rana.uniqueID();
hadi.uniqueID();

console.log("Full Name: " + ghazi.fullName);

let ghaziSalary = ghazi.salary(1000, 1500);
console.log("Salary: " + (ghaziSalary - (ghaziSalary*0.075)));


