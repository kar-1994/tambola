const { getToken } = require("../Authentication/jwt");
const {fetchUserDetals}=require("../db/model");
exports.loginService=(packet)=>{
    return new Promise(async(resolve, reject) => {
       const data=await fetchUserDetals(packet.name)
       if(data==undefined){
        console.log("----");
        return reject("user not found.")
       }else{
        jwt_data=JSON.parse(JSON.stringify(data))
        // console.log("---",data);
        const token=await getToken(jwt_data)
        return resolve(token);
       }
      
    })

}