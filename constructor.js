let id = 999;
function Employees(fullName, department, level, employeeID, netSalary) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.netsalary = netSalary;
    this.employeeID = employeeID;
    this.uniqeID = function() {
        this.employeeID = id + 1;
        id++;
    };
    this.salary = function (min, max) {
        return (Math.floor(Math.random() * (max - min + 1) ) + min)
  };
};

let ghazi = new Employees("Ghazi Samer", "Administration", "Senior");
let lana = new Employees("Lana Ali", "Finance", "Senior");
let tamara = new Employees("Tamara Ayoub", "Marketing", "Senior");
let safi = new Employees("Safi Walid", "Adminis", "Mid-Senior");
let omar = new Employees("Omar Zaid", "Development", "Senior");
let rana = new Employees("Rana Saleh", "Development", "Junior");
let hadi = new Employees("Hadi Ahmad", "Finance", "Mid-Senior");

ghazi.uniqeID();
ghazi.salary(1000, 1500);
lana.uniqeID();
lana.salary(1000, 1500);
tamara.uniqeID();
tamara.salary(1000, 1500);
safi.uniqeID();
safi.salary(500, 1000);
omar.uniqeID();
omar.salary(1000, 1500);
rana.uniqeID();
rana.salary(250, 500);
hadi.uniqeID();
hadi.salary(500, 1000);



Employees.prototype.render = function() {
    document.write(`<h1>Name: ${this.fullName} Department: ${this.department} Salary: ${this.salary}</h1>`);
};

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();

