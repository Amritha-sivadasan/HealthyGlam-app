const amqp = require("amqplib/callback_api");

const connectionString = process.env.RABBITMQ_PORT||"amqp://localhost" 

   console.log('process .env',process.env.RABBITMQ_PORT);
const createChannel = (callback, maxRetries = 5, retryDelay = 2000) => {
  let retry = 0;


  const connect = () => {
    amqp.connect(connectionString, (err, connection) => {
      if (err) {
        console.log(  "connection string",connectionString);
        console.error(`Attempt ${retry + 1} failed to connect to RabbitMQ: ${err.message}`);
        retry++;
        if (retry < maxRetries) {
          console.log(`Retrying in ${retryDelay / 1000} seconds...`);
          setTimeout(connect, retryDelay);
        } else {
          console.error('Max retries reached. Failed to connect to RabbitMQ.');
        }
        return;
      }
      console.log('Connected to RabbitMQ successfully.');

      connection.createChannel((err, channel) => {
        if (err) {
          console.error(`Failed to create RabbitMQ channel: ${err.message}`);
          connection.close(); 
          return;
        }
        callback(channel, connection);
      });
    });
  };

  connect();
};

module.exports = { createChannel };
