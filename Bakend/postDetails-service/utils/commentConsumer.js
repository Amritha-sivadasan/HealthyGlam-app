const { createChannel } = require("../rabbitmq/rabbitmq");
const Comment = require("../model/commetModel");

exports.consumerComment = () => {
  createChannel((channel) => {
    const exchange = "comment";
    channel.assertExchange(exchange, "fanout", { durable: true });
    channel.assertQueue("", { exclusive: true }, (err, q) => {
      if (err) {
        console.error(`Failed to declare queue: ${err.message}`);
        process.exit(1);
      }
      channel.bindQueue(q.queue, exchange, "");
      console.log(
        " [*] Waiting for messages in %s. To exit press CTRL+C",
        q.queue
      );

      channel.consume(
        q.queue,
        async (msg) => {
          if (msg.content) {
            const commentData = JSON.parse(msg.content.toString());
            console.log(" [x] Received %s", commentData);
            try {
              const { type, data } = commentData;

              if (type === "COMMENT_CREATE") {
                const newPost = new Comment(data);
                await newPost.save();
                console.log("Post saved to database:", newPost);
              }
            } catch (error) {
              console.error("Failed to save post to database:", error.message);
            }
          }
        },
        { noAck: true }
      );
    });
  });
};
