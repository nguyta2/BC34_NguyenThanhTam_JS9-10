var employeeList = new EmployeeList();
var validation = new Validation();

getLocalStorage();

function getEmployeeInfo(isAdded) {
  // get input from user
  var tknv = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var datepicker = document.getElementById("datepicker").value;
  var salary = document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu");
  var workingHours = document.getElementById("gioLam").value;

  // validate before creating employee object
  var isValid = true;

  if (isAdded) {
    // check account
    isValid &=
      validation._checkEmpty(tknv, "tbTKNV", "(*) Please input account") &&
      validation._checkAccount(
        tknv,
        "tbTKNV",
        "(*) Please input account with maximum 6 characters"
      ) &&
      validation._checkExistingEmployee(
        tknv,
        "tbTKNV",
        "(*) Please input different account",
        employeeList.arr
      );
  }

  // check name
  isValid &=
    validation._checkEmpty(name, "tbTen", "(*) Please input name") &&
    validation._checkName(
      name,
      "tbTen",
      "(*) Please input name with only characters"
    );

  // check email
  isValid &=
    validation._checkEmpty(email, "tbEmail", "(*) Please input email") &&
    validation._checkEmail(
      email,
      "tbEmail",
      "(*) Please input email with correct format"
    );

  // check password
  isValid &=
    validation._checkEmpty(
      password,
      "tbMatKhau",
      "(*) Please input password"
    ) &&
    validation._checkPassWord(
      password,
      "tbMatKhau",
      "(*) Please input stronger password, hints: 6-10 characters, at least 1 number, 1 upper character, 1 special character"
    );

  // check datepicker
  isValid &=
    validation._checkEmpty(datepicker, "tbNgay", "(*) Please input date") &&
    validation._checkDate(
      datepicker,
      "tbNgay",
      "(*) Please input date with correct format mm/dd/yy"
    );

  // check salary
  isValid &=
    validation._checkEmpty(salary, "tbLuongCB", "(*) Please input salary") &&
    validation._checkSalary(
      salary,
      "tbLuongCB",
      "(*) Please input salary in range 1M-20M"
    );

  // check position
  isValid &= validation._checkPosition(
    position,
    "tbChucVu",
    "(*) Please input proper position"
  );

  // check workingHours
  isValid &=
    validation._checkEmpty(
      workingHours,
      "tbGiolam",
      "(*) Please input working hours"
    ) &&
    validation._checkWorkingHours(
      workingHours,
      "tbGiolam",
      "(*) Please input working hours in range 80-200"
    );

  if (isValid) {
    var employee = new Employee(
      tknv,
      name,
      email,
      password,
      datepicker,
      salary,
      position.value,
      workingHours
    );
    employee.calcTotalSalary();
    employee.classifyEmployee();
    return employee;
  }
  return null;
}

function printEmployeeList(data) {
  var content = "";

  data.forEach(function (e) {
    content += `<tr>
                  <td>${e.account}</td>
                  <td>${e.fullName}</td>
                  <td>${e.email}</td>
                  <td>${e.workingDay}</td>
                  <td>${e.role}</td>
                  <td>${e.totalSalary}</td>
                  <td>${e.employeeType}</td>
                  <td style="display: flex;">
                    <button class="btn btn-danger" onclick="deleteEmployee('${e.account}')">Delete</button>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="changeEmployeeInfo('${e.account}')">Change</button>
                  </td>
                </tr>`;
  });
  document.querySelector("#tableDanhSach").innerHTML = content;
}

function deleteEmployee(account) {
  employeeList._deleteEmployee(account);
  printEmployeeList(employeeList.arr);
  setLocalStorage();
}

function changeEmployeeInfo(account) {
  var e = employeeList._getEmployeeInfo(account);

  if (e) {
    document.getElementById("tknv").value = e.account;
    document.getElementById("name").value = e.fullName;
    document.getElementById("email").value = e.email;
    document.getElementById("password").value = e.password;
    document.getElementById("datepicker").value = e.workingDay;
    document.getElementById("luongCB").value = e.salary;
    document.getElementById("chucvu").value = e.role;
    document.getElementById("gioLam").value = e.workingHours;
    document.getElementById("tknv").disabled = true;
  }
}

document.querySelector("#btnThemNV").addEventListener("click", function () {
  var employee = getEmployeeInfo(true);

  if (employee) {
    employeeList._addEmployee(employee);
    printEmployeeList(employeeList.arr);
    setLocalStorage();
  }
});

// Update employee
document.querySelector("#btnCapNhat").addEventListener("click", function () {
  var e = getEmployeeInfo(false);
  employeeList._updateEmployeeInfo(e);
  printEmployeeList(employeeList.arr);
  setLocalStorage();
});

function setLocalStorage() {
  var dataString = JSON.stringify(employeeList.arr);
  localStorage.setItem("EmployeeList", dataString);
}

function getLocalStorage() {
  var dataString = localStorage.getItem("EmployeeList");
  var jsonData = JSON.parse(dataString);
  employeeList.arr = jsonData;
  printEmployeeList(employeeList.arr);
}

function enable() {
  document.getElementById("tknv").disabled = false;
}

document.getElementById("searchName").addEventListener("keyup", function () {
  var keyword = document.getElementById("searchName").value;
  var findingArr = employeeList._findAllRelevantEmployee(keyword);
  printEmployeeList(findingArr);
});
