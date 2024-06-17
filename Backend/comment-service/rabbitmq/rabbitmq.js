const amqplib = require("amqplib");
const connectionString = 'amqp://guest:guest@rabbitmq:5672/'



let rabbitmqChannel;
const MAX_RETRIES = 5; // Maximum number of retries
const createChannel = async () => {
  let retryCount = 0;
  const interval = 1000; // Delay between retries in milliseconds

  while (retryCount <= MAX_RETRIES) {
    try {
      const connection = await amqplib.connect(connectionString);
      rabbitmqChannel = await connection.createChannel();
      console.log("Connected to RabbitMQ");
      return; // Exit the function once connected
    } catch (error) {
      console.error("Error connecting to RabbitMQ:", error);
      retryCount++;
      if (retryCount <= MAX_RETRIES) {
        console.log(`Retrying connection to RabbitMQ... Attempt ${retryCount}`);
        await new Promise((resolve) =>
          setTimeout(resolve, interval * Math.pow(2, retryCount))
        ); // Exponential backoff
      } else {
        throw new Error("Failed to connect to RabbitMQ after max retries");
      }
    }
  }
};
module.exports = { createChannel };