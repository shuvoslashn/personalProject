// enum - numeric, string, hetarozenus
// numeric enum
var numValue;
(function (numValue) {
    numValue[numValue["one"] = 1] = "one";
    numValue[numValue["two"] = 2] = "two";
    numValue[numValue["three"] = 3] = "three";
})(numValue || (numValue = {}));
// string enum
var strValue;
(function (strValue) {
    strValue["a"] = "AAA";
    strValue["b"] = "BBB";
    strValue["c"] = "CCC";
})(strValue || (strValue = {}));
// hetarozenus enum
var hetaroValue;
(function (hetaroValue) {
    hetaroValue[hetaroValue["id"] = 324651] = "id";
    hetaroValue["title"] = "Ecommerce Product";
    hetaroValue[hetaroValue["price"] = 650] = "price";
})(hetaroValue || (hetaroValue = {}));
// console.log(numValue);
// console.log(strValue);
// console.log(hetaroValue);
//! Any file type
var userName;
userName = 'shuvo';
userName = 1234;
userName = true;
userName = [23, 34, 'sh'];
// console.log(userName)
//! Object type
var newUser1;
