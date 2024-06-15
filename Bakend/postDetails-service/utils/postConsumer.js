const {createChannel} = require("../rabbitmq/rabbitmq");
 const Post=require('../model/PostDetailsModel')

exports.consumerPost = () => {
  createChannel((channel) => {
    const exchange = "post";
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

      channel.consume(q.queue, async (msg) => {
        if (msg.content) {
        
          const postData = JSON.parse(msg.content.toString());
          console.log(" [x] Received %s", postData);
          try {
            const { type, data } = postData;

            if (type === "POST_CREATED") {
              const newPost = new Post(data);
              await newPost.save();
              console.log("Post saved to database:", newPost);
            }
          } catch (error) {
            console.error("Failed to save post to database:", error.message);
          }
        }
      }, { noAck: true });
    });
  });
};
