const AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-west-1' });

const dynamoDB = new AWS.DynamoDB();

function putItem(table, item, callback) {
    let params = {
        TableName: table,
        Item: {}
    };

    for (let key of Object.keys(item)) {
        let val;
        if (typeof item[key] === 'string') {
            val = { S: item[key] };
        } else if (typeof item[key] === 'number') {
            val = { N: '' + item[key] };
        } else if (item[key] instanceof Array) {
            val = { SS: item[key] };
        }
        params.Item[key] = val;
    }

    dynamoDB.putItem(params, callback);
}

function getAllItems(table, callback) {
    let params = {
        TableName: table
    };

    dynamoDB.scan(params, callback);
}

function getItem(table, idName, id, callback) {
    let params = {
        TableName: table,
        Key: {}
    };
    params.Key[idName] = { S: id };

    dynamoDB.getItem(params, callback);
}

module.exports.putItem = putItem;
module.exports.getAllItems = getAllItems;
module.exports.getItem = getItem;
