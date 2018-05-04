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
      icon_emoji: "http://www.strangekidsclub.com/wp-content/uploads/2013/02/jack-chan-a-2.png",
      // icon_emoji: "https://slack.com/img/icons/app-57.png",
      text: message
    }, function(err, response) {
      cb(response);
    });
  }
}