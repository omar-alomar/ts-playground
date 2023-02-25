"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let numbers = [];
let user = [1, "Omar"];
let mySize = 1;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
//# sourceMappingURL=index.js.map