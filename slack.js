module.exports = {
  /**
   * Example POST: payload={"text": "This is a line of text in a channel.\nAnd this is another line of text."}
   */
  sendMessage: function(message, cb) {
    var Slack = require('slack-node');
    const config = require('./config.js');

    slack = new Slack();
    slack.setWebhook(config.SLACK_WEBHOOK_URI);
    
    slack.webhook({
      // channel: "@adamgedney",
      username: "yuqiao",
      icon_emoji: "https://image.ibb.co/e6Je9S/Screen_Shot_2018_05_04_at_11_31_00_AM.png",
      text: message
    }, function(err, response) {
      cb(response);
    });
  }
}