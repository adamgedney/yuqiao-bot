(function(timeInt) {
  const slack = require('./slack.js');
  const statement = `in ${timeInt}`;
  console.log(slack);
  slack.sendMessage(statement, function(res) {
    console.log(statement, res);
  });
  
  return statement;
})(15);