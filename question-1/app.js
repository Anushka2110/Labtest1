
var ft = require("./calculator.js");
var fs = require("./calculator.js");


ft.x = 3;
ft.y = 6;
fs.x = 4;


var res = ft.multiplyTwoNumbers();
var res1 = fs.evenDoubler();
console.log("multiply "+ ft.x +"* "+ft.y+" equals: "+res);
console.log("even doubler "+fs.x+" equals: "+res1);

