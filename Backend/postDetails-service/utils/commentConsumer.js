const { createChannel } = require("../rabbitmq/rabbitmq");
const Post = require("../model/PostDetailsModel");

consumerComment= async () => {
  let connection;
  try {
    console.log("this is consumer function");
    const { connection: conn, channel } = await createChannel();
    connection = conn;
    const queue = "COMMENT_CREATE";

    await channel.assertQueue(queue, { durable: true }); // Ensure the queue exists
    console.log("consumer is listening");

    channel.consume(queue, async (msg) => {
      try {
        if (msg !== null) {
          console.log("Message Received:", msg.content.toString());
          const msgContent = msg.content.toString();
          const data = JSON.parse(msgContent);
          console.log("data", data);
          const { postId, comment } = data;
          const postDetails = await Post.updateOne(
            { postId: postId },
            { $push: { comment: comment } }
          );

          channel.ack(msg);
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
    });

    console.log("Consumer started successfully.");
  } catch (error) {
    console.error("Error starting consumer:", error);
  } finally {
    if (connection) {
      // connection.close();
    }
  }
};

module.exports = { consumerComment };
