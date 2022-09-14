const axios = require("axios");

const endpoint = "https://sweeping-reindeer-45.hasura.app/v1/graphql";
const headers = {
	"content-type": "application/json",
    "Authorization": "<token>"
};
const graphqlQuery = {
    "operationName": "fetchAuthor",
    "query": `query fetchAuthor { author { id name } }`,
    "variables": {}
};

const response = axios({
  url: endpoint,
  method: 'post',
  headers: headers,
  data: graphqlQuery
});

console.log(response.data); // data
console.log(response.errors); // errors if any