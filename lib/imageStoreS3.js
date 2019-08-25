const AWS = require('aws-sdk');

const s3 = new AWS.S3();

module.exports.save = (name, data, callback) => {
  let params = {
    Bucket: 'pizza-luvrs-chris-vaughan',
    Key: `pizzas/${name}.png`,
    Body: new ArrayBuffer(data, 'base64'),
    ContentEncoding: 'base64',
    ContentType: 'image/png'
  };

  s3.putObject(params, (err, data) => {
      callback(err, `//pizza-luvrs-chris-vaughan.s3-eu-west-1.amazonaws.com/${params.key}`)
  });
};