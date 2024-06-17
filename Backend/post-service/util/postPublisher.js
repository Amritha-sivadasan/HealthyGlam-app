const {createChannel} = require("../rabbitmq/rabbitmq");

exports.publisher = (post) => {
  createChannel((channel, connection) => {

    const exchange = "post";
    channel.assertExchange(exchange, "fanout",{durable:true});
    const message = JSON.stringify(post);
    channel.publish(exchange, '', Buffer.from(message));
    console.log(" [x] Sent %s", message);
    setTimeout(() => {
      connection.close();
  }, 500);
  });

};
