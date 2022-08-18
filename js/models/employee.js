function Employee(
  _account,
  _fullName,
  _email,
  _password,
  _workingDay,
  _salary,
  _role,
  _workingHours
) {
  this.account = _account;
  this.fullName = _fullName;
  this.email = _email;
  this.password = _password;
  this.workingDay = _workingDay;
  this.salary = _salary;
  this.role = _role;
  this.workingHours = _workingHours;
  this.calcTotalSalary = function () {
    if (this.role === "Sếp") {
      this.totalSalary = this.salary * 3;
    }

    if (this.role === "Trưởng phòng") {
      this.totalSalary = this.salary * 2;
    }

    if (this.role === "Nhân viên") {
      this.totalSalary = this.salary;
    }
  };
  this.classifyEmployee = function () {
    if (this.workingHours >= 192) {
      this.employeeType = "Nhân viên xuất sắc";
    } else if (this.workingHours >= 176) {
      this.employeeType = "Nhân viên giỏi";
    } else if (this.workingHours >= 160) {
      this.employeeType = "Nhân viên khá";
    } else {
      this.employeeType = "Nhân viên trung bình";
    }
  };
}
