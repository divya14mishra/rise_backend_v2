const AWS = require("aws-sdk");

AWS.config.update({
          accessKeyId: process.env.ACCESS_KEY_ID,
          secretAccessKey: process.env.SECRET_ACCESS_KEY,
        });
    
let s3 = new AWS.S3();

module.exports = { s3 };
