const pool = require("./db")

exports.fetchUserDetals = (user) => {
    return new Promise((resolve, reject) => {
        let q = `SELECT * FROM auths WHERE username=?`;

        pool.query(q, [user], (err, data) => {
            if (err) {
                console.error(err);
                return reject({
                    code: -1,
                    data: "User not found"

                });
            }
            return resolve(data[0]);
        });

    })
}

exports.insertUserData = (packet) => {
    return new Promise((resolve, reject) => {
        const { name, email, password } = packet;
        let qry = 'INSERT INTO auths(username,password,email) VALUE(?,?,?)';
        pool.query(qry, [name, password, email], (err, data) => {
            if (err) {
                console.error(err);
                return reject({
                    code: -1,
                    data: "Error in db insertion"

                });
            }
            return resolve({
                code: 0,
                info: "data inserted successfully."
            });
        });
    })


}
exports.insertTicket=(ticket,uid)=>{
return new Promise((resolve,reject)=>{
    let qry='INSERT INTO tambola_tickets(user_id,tickets) VALUE(?,?)';
    pool.query(qry,[uid,ticket],(err,data)=>{
        if (err) {
            console.error(err);
            return reject({
                code: -1,
                info: "Error in db insertion"

            });
        } 
        return resolve({
            code: 0,
            info: "Ticket inserted successfully."
        });
    })
})
}
exports.getTicketDetails=(uid)=>{
return new Promise((resolve,reject)=>{
    let qry='SELECT tickets FROM tambola_tickets WHERE user_id=?'
    pool.query(qry,[uid],(err,data)=>{
        if (err) {
            console.error(err);
            return reject({
                code: -1,
                info: "Error in db insertion"

            });
        } 
        return resolve(data);
    })
})
}