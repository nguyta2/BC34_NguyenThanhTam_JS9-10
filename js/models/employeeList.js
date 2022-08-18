function EmployeeList() {
  this.arr = [];

  this._addEmployee = function (employee) {
    this.arr.push(employee);
  };

  this._findIndex = function (value) {
    var index = -1;

    this.arr.forEach(function (e, i) {
      if (value === e.account) {
        index = i;
      }
    });

    return index;
  };

  this._deleteEmployee = function (account) {
    var index = this._findIndex(account);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  this._getEmployeeInfo = function (account) {
    var e = null;

    var index = this._findIndex(account);

    if (index !== -1) {
      e = this.arr[index];
    }
    return e;
  };

  this._updateEmployeeInfo = function (e) {
    var index = this._findIndex(e.account);

    if (index !== -1) {
      this.arr[index] = e;
    }
  };

  this._findAllRelevantEmployee = function (keyword) {
    var arr = [];

    this.arr.forEach(function (e) {
      var typeLowerCase = e.employeeType.toLowerCase();
      var keywordLowerCase = keyword.toLowerCase();
      if (typeLowerCase.indexOf(keywordLowerCase) !== -1) {
        arr.push(e);
      }
    });
    return arr;
  };
}
