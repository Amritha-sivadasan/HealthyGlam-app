const { createChannel } = require("../rabbitmq/rabbitmq");
const exchange = "commonexchange";

exports.publisher = async (queue, data) => {
  let connection;
  try {
    const { connection: conn, channel } = await createChannel();
    connection = conn;
    
    console.log("Connected to RabbitMQ, asserting exchange and queue...");
    await channel.assertExchange(exchange, "fanout", { durable: true });
    await channel.assertQueue(queue, { durable: true });
    await channel.bindQueue(queue, exchange, "");

    console.log("Exchange and queue asserted and bound successfully.");

    const message = JSON.stringify(data);
    const publishStatus = channel.publish(exchange, "", Buffer.from(message));

    if (publishStatus) {
      console.log("Message published to queue successfully:", message);
    } else {
      console.error("Failed to publish message to queue:", message);
    } 

  } catch (error) {
    console.error("Failed to publish message:", error);
  }
};
