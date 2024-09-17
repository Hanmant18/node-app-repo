const os = require('os');
console.log("my first app");
console.log('================Global Object==================');

console.log(`Console${console}`);
console.log(`process${process}`);
console.log(`global${global}`);
console.log(`File Name${__filename}`);
console.log(`Directory Name${__dirname}`);
console.log(`module${module}`);


console.log('=================Built in Module===================');
console.log(`Arch : ${os.arch}`);
// console.log(`cpus :${os.cpus}`);
console.log(`freemem : ${os.freemem}`);
console.log(`totalmem : ${os.totalmem}`);
console.log(`hostname : ${os.hostname}`);
console.log(`platform : ${os.platform}`);
console.log(`release : ${os.release}`);
console.log(`type : ${os.type}`);
console.log(`uptime : ${os.uptime}`);
// console.log(os.userInfo);



