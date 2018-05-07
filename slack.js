module.exports = {
  /**
   * Example POST: payload={"text": "This is a line of text in a channel.\nAnd this is another line of text."}
   */
  sendMessage: function(message, channel, icon, username, cb) {
    var Slack = require('slack-node');
    const config = require('./config.js');

    slack = new Slack();
    slack.setWebhook(config.SLACK_WEBHOOK_URI);
    
    slack.webhook({
      channel: channel,
      username: username,
      icon_emoji: icon,
      text: message
    }, function(err, response) {
      cb(response);
    });
  }
}