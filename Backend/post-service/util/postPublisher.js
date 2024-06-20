const { createChannel } = require("../rabbitmq/rabbitmq");
const exchange = "commonexchange";

exports.publisher = async (queue, data) => {
  let connection;
  try {
    const { connection: conn, channel } = await createChannel();
    connection = conn;
    
    await channel.assertExchange(exchange, "fanout", { durable: true });
    await channel.assertQueue(queue, { durable: true });
    await channel.bindQueue(queue, exchange, "");
    
    const message = JSON.stringify(data);
    channel.publish(exchange, "", Buffer.from(message));
    
    console.log("Message published to queue:", message);
  } catch (error) {
    console.error("Failed to publish message:", error);
  } 
};
