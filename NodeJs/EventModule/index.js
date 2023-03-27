const { ok } = require("assert");
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName",() =>{
console.log("My name is Adnan")
})

event.on("sayMyName", () => {
console.log("My last name is Ahmed")
})

event.on("checkMyApi",(code,status) =>{
console.log(`Api status code is ${code} and is running ${status}`)
});


event.emit("checkMyApi",200,"ok")
event.emit("sayMyName");