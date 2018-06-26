"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Login = /** @class */ (function () {
    function Login(params) {
        if (params === void 0) { params = { userName: 'userName', pass: 'pass', login: 'login' }; }
        this.params = params;
    }
    Login.prototype.render = function () {
        return "<div>\n      <div><label for=\"\">" + this.params.userName + "<input type=\"text\"></label></div>\n      <div><label for=\"\">" + this.params.pass + "<input type=\"password\"></label></div>\n      <div><button>" + this.params.login + "</button></div>\n    </div>";
    };
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=Login.js.map