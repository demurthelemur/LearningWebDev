"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var houses_1 = require("./houses");
function findHouses(input, filter) {
    var houses = typeof input === "string" ? JSON.parse(input) : input;
    return filter
        ? houses
            .filter(filter)
            .map(function (house) { return (__assign(__assign({}, house), { id: Math.floor(Math.random() * 1000 + 1) })); })
        : houses.map(function (house) { return (__assign(__assign({}, house), { id: Math.floor(Math.random() * 1000 + 1) })); });
}
console.log("First instance");
console.log(findHouses(JSON.stringify(houses_1.default), function (_a) {
    var name = _a.name;
    return name === "Atreides";
}));
console.log("Second instance");
console.log(findHouses(houses_1.default, function (_a) {
    var name = _a.name;
    return name === "Harkonnen";
}));
