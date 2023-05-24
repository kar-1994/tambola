const { insertUserData } = require("../db/model")

exports.registrationService=(packet)=>{
    return new Promise(async(resolve,reject)=>{
        const res=await insertUserData(packet)
        return resolve(res)

    })
}