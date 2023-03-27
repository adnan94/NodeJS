const { ok } = require("assert");
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName",(name,last) =>{
console.log(`My name is ${name}`)
})

event.on("sayMyName", (name,last) => {
console.log(`My last name is ${last}`)
})

event.on("checkMyApi",(code,status) =>{
console.log(`Api status code is ${code} and is running ${status}`)
});


event.emit("sayMyName","Adnan","Ahmed");
event.emit("checkMyApi",200,"ok")
 