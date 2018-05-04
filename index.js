(function(timeInt) {
  const slack = require('./slack.js');
  const statement = `in ${timeInt}`;
  
  slack.sendMessage(statement, function(res) {
    console.log(statement, res);
  });
  
  return statement;
})(15);