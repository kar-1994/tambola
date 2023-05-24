const { insertTicket } = require("../db/model");

exports.createTicketService=(req)=>{
return new Promise(async(resolve,reject)=>{
   // Function to generate a random number within a range

//   let packet=req.body;
  // Generate a set of 6 Tambola tickets
  var tickets = generateTambolaTickets(req.body.tickets);
  const res=await insertTicket(JSON.stringify(tickets),req.uid)
  // Print the tickets
//   console.log("Tambola Tickets:", tickets);
 return resolve(
        {
        code:0,
        no_of_tickets:req.body.tickets,
        data:res.info
        })
})
}

function generateTambolaTickets(numTickets) {
  const tickets = [];

  for (let t = 0; t < numTickets; t++) {
    const ticket = [];
     

    // Fill in the numbers in each column
    for (let c = 0; c < 3; c++) {
      const column = [];

      // Assign the numbers in ascending order from the shuffled array
      for (let r = 0; r < 9; r++) {
        const numbers = Array.from({ length: 10 }, (_, i) => i + 10 * r);
          for (let i = numbers.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
         }
        if (numbers.length > 0) {
          column.push(numbers.shift());
        }
      }
       // Sort the column in ascending order
      column.sort((a, b) => a - b);
        

		for (let i = 4; i > 0; i--) {
		  const j = Math.floor(Math.random() * 9);
		  column[i, j] = 0;
		}


      // Add the column to the ticket
      ticket.push(column);
    }

    tickets.push(ticket);
  }

  return tickets;
}