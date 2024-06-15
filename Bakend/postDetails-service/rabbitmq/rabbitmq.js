const amqp = require("amqplib/callback_api");

const createChannel = (callback) => {
  amqp.connect("amqp://localhost", (err, connection) => {
    if (err) {
      console.error(`Failed to connect to RabbitMQ: ${err.message}`);
      return;
    }
    connection.createChannel((err, channel) => {
      if (err) {
        console.error(`Failed to create RabbitMQ channel: ${err.message}`);
        return;
      }
      callback(channel, connection);
    });
  });
};

module.exports = { createChannel };
