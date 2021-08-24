require('dotenv').config();
const axios = require('axios').default;
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const {
    REGION, ACCESS_KEY, SECRET_ACCES_KEY,
} = process.env;
//
AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCES_KEY
})
const connectionDynamo = new AWS.DynamoDB.DocumentClient();
// const docClient = new AWS.DynamoDB.DocumentClient();
const dynamodb = new AWS.DynamoDB();

module.exports = { connectionDynamo, dynamodb };