"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style/index.css");
var Login_1 = require("./scripts/Componets/Login");
var param = { userName: '用户', pass: '密码', login: '登录' };
var login = new Login_1.Login(param);
alert(666);
document.getElementById('root').innerHTML = login.render();
document.getElementById('root').innerHTML += "<br/>\u6628\u65E5\u9EC4\u571F\u9001\u767D\u9AA8,\u4ECA\u5BB5\u7EA2\u706F\u5E10\u5E95\u5367\u9E33\u9E2F\uFF0C\u91D1\u6EE1\u7BB1\uFF0C\u94F6\u6EE1\u7BB1\uFF0C\n<span class=\"no-select\">\u4F60\u9009\u6211\u8BD5\u8BD5</span> \u5982\u4F55\u4E24\u9B13\u53C8\u6210\u971C\uFF1F";
//# sourceMappingURL=index.js.map