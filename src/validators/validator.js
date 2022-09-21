// -----------------  REGEX  ----------------------------

const mongoose = require("mongoose");

const isValidEmail = function (mail) {
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
};

const isValidPassword = function (pass) {
  if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/.test(pass))
    return true;
};

const isValidName = function (name) {
  if (/^[A-Za-z]{1,35}/.test(name)) return true;
  return false;
};

const isValidBody = function (data) {
  return Object.keys(data).length > 0;
};

const isValidNumber = function (number) {
  if (/^[0]?[6789]\d{9}$/.test(number)) return true;
  return false;
};

const isValidId = function (id) {
  return mongoose.Types.ObjectId.isValid(id);
};

const isValidISBN = function (isbn) {
 if (/^(97(8|9))?\d{9}(\d|X)$/.test(isbn)) return true;
 return false;
};

const isValidDate = function (date) {
 if (/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(date))
   return true;
 return false;
};

module.exports = {
  isValidEmail,
  isValidBody,
  isValidName,
  isValidPassword,
  isValidNumber,
  isValidId,
  isValidISBN,
  isValidDate
};
