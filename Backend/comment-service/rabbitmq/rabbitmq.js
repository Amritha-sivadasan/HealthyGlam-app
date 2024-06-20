const amqp = require("amqplib/callback_api");

const MAX_RETRIES = 5;
let retryCount = 0;

const createChannel = () => {
  return new Promise((resolve, reject) => {
    const attemptConnection = () => {
      amqp.connect("amqp://rabbitmq:5672", (error0, connection) => {
        if (error0) {
          console.error("Error connecting to RabbitMQ:", error0);
          if (retryCount < MAX_RETRIES) {
            const interval = 1000 * Math.pow(2, retryCount); 
            retryCount++;
            console.log(`Retrying connection to RabbitMQ... Attempt ${retryCount}`);
            setTimeout(attemptConnection, interval);
          } else {
            reject(new Error("Failed to connect to RabbitMQ after max retries"));
          }
          return;
        }

        connection.createChannel((error1, channel) => {
          if (error1) {
            console.error("Error creating channel:", error1);
            connection.close(); 
            reject(error1);
            return;
          }
          console.log("Successfully connected to RabbitMQ!");
          resolve({ connection, channel });
        });
      });
    };

    attemptConnection();
  });
};

module.exports = { createChannel };
