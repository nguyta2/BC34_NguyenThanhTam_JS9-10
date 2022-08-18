function Validation() {
  this._checkEmpty = function (value, errorId, mess) {
    if (value.length === 0) {
      // true
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }

    // false
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };

  // account length should be maximum 6 characters
  this._checkAccount = function (value, errorId, mess) {
    if (value.length > 6) {
      // true
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }

    // false
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };

  // name should be only characters
  this._checkName = function (value, errorId, mess) {
    var letters =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

    if (!value.match(letters)) {
      // true
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }

    // false
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };

  this._checkEmail = function (value, errorId, mess) {
    var email =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.toLowerCase().match(email)) {
      // true
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }

    // false
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };

  // password should be 6-10 characters (at least 1 number, 1 upper character, 1 special character)
  this._checkPassWord = function (value, errorId, mess) {
    var password =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

    if (!value.match(password)) {
      // true
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }

    // false
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };

  this._checkDate = function (value, errorId, mess) {
    var date = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

    if (!value.match(date)) {
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };

  // salary should be 1.000.000 - 20.000.000
  this._checkSalary = function (value, errorId, mess) {
    if (value < 1000000 || value > 20000000) {
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };

  this._checkPosition = function (value, errorId, mess) {
    if (value.selectedIndex === 0) {
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };

  this._checkWorkingHours = function (value, errorId, mess) {
    if (value < 80 || value > 200) {
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };

  this._checkExistingEmployee = function (value, errorId, mess, list) {
    var status = list.some(function (e) {
      return value === e.account;
    });

    if (status) {
      document.getElementById(errorId).style.display = "inline-block";
      document.getElementById(errorId).innerHTML = mess;
      return false;
    }
    document.getElementById(errorId).style.display = "none";
    document.getElementById(errorId).innerHTML = "";
    return true;
  };
}
