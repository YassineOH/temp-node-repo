const os = require('os')

// info about curent user
const user = os.userInfo()
console.log(user)



// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime / (24 * 3600)} d`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem() / (1024 * 1024),
    freMem: os.freemem() / (1024 * 1024)

}


console.log(currentOS)
