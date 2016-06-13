module.exports = function(Order) {

  Order.postOrderFulfill = function(orderId, cb) {

  }

  Order.remoteMethod("postOrderFulfill", {
    http: {
      path: "/fulfill/:orderId",
      verb: "post"
    },
    accepts: [{
      arg: "orderId",
      type: "string"
    }],
    returns: [{
      arg: "statusCode",
      type: "string"
    }, {
      arg: "result",
      type: "object"
    }, {
      arg: "message",
      type: "string"
    }]
  });

 };
