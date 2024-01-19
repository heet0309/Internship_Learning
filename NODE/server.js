const http = require("node:http");
const hostname = "127.0.0.1";

// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// function final(someInput, callback) {
//   callback(`${someInput} and terminated by executing callback `);
// }
// function middleware(someInput, callback) {
//   return final(`${someInput} touched by middleware `, callback);
// }
// function initiate() {
//   const someInput = "hello this is a function ";
//   middleware(someInput, function (result) {
//     console.log(result);
//     // requires callback to `return` result
//   });
// }
// // initiate();

// function getSong() {
//   let _song = "";
//   let i = 100;
//   for (i; i > 0; i -= 1) {
//     /* eslint-disable no-loop-func */
//     setTimeout(function () {
//       _song += `${i} beers on the wall, you take one down and pass it around, ${
//         i - 1
//       } bottles of beer on the wall\n`;
//       if (i === 1) {
//         _song += "Hey let's get some more beer";
//       }
//     }, 0);
//     /* eslint-enable no-loop-func */
//   }
//   return _song;
// }
// function singSong(_song) {
//   if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
//   console.log(_song);
// }
// const song = getSong("beer");
// // this will not work
// singSong(song);

// let successCount = 0;
// function final() {
//   console.log(`dispatched ${successCount} emails`);
//   console.log("finished");
// }
// function dispatch(recipient, callback) {
//   // `sendEmail` is a hypothetical SMTP client
//   sendMail(
//     {
//       subject: "Dinner tonight",
//       message: "We have lots of cabbage on the plate. You coming?",
//       smtp: recipient.email,
//     },
//     callback
//   );
// }
// function sendOneMillionEmailsOnly() {
//   getListOfTenMillionGreatEmails(function (err, bigList) {
//     if (err) throw err;
//     function serial(recipient) {
//       if (!recipient || successCount >= 1000000) return final();
//       dispatch(recipient, function (_err) {
//         if (!_err) successCount += 1;
//         serial(bigList.pop());
//       });
//     }
//     serial(bigList.pop());
//   });
// }
// sendOneMillionEmailsOnly();
