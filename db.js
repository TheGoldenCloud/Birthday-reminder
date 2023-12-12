

// const connection = mysql.createConnection({
//   host: 'localhost\\SQLEXPRESS',
//   driver: 'msnodesqlv8',
//   database: 'birthday'
// });




// let connect = () => {
//     connection.connect((err) => {
//         if (err) {
//           console.error('Error connecting to MySQL:', err);
//           return;
//         }
      
//         console.log('Connected to MySQL database');
      
//         // Perform your database operations here
      
//         connection.end((err) => {
//           if (err) {
//             console.error('Error closing MySQL connection:', err);
//           } else {
//             console.log('MySQL connection closed');
//           }
//         });
//       });
// }

module.exports = connect;