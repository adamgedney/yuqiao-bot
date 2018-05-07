(function() {
  const slack = require('./slack.js');
  const bot = process.argv[process.argv.length - 2];
  const timeInt = process.argv[process.argv.length - 1];
  let statement = '';
  let channel = undefined;
  let icon = '';
  let username = "";
  
  switch (bot) {
  	case 'adam' :
  	// MOnday is a different adambot message
  		statement = new Date().getDay() === 1 
	  		? `How was Friday? Did you meet the goal? How about today? What are you aiming for?` 
	  		: `How did it go yesterday? Did you meet your goals? What's the goal for today?`;
  		channel = "G9NL1RC85";
  		icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Circle-icons-rocket.svg/150px-Circle-icons-rocket.svg.png";
  		username = "adamgedney";
  		break;
  	case 'eli' :
  		statement = `in at ${timeInt}`;
  		channel = "i-will-be-late";
  		icon = "https://lh3.googleusercontent.com/-pqGTgsaPkpI/AAAAAAAAAAI/AAAAAAAAALM/UwsL7ZdDjNE/photo.jpg?sz=328";
  		username = "eli";
  		break;
  	case 'yuqiao' :
  	default :
  		statement = `in ${timeInt}`;
  		icon = "https://image.ibb.co/e6Je9S/Screen_Shot_2018_05_04_at_11_31_00_AM.png";
  		username = "yuqiao";
  }
  
  slack.sendMessage(statement, channel, icon, username, function(res) {
    console.log(statement, channel, icon, username);
  });
  
  return statement;
})();