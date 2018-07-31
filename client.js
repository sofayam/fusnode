var SparqlClient = require('sparql-client');
var util = require('util');
var endpoint = 'http://localhost:3030/shops/query';
 
// Get the leaderName(s) of the given citys
// if you do not bind any city, it returns 10 random leaderNames

var query1 = 'SELECT ?subject  ?object \
WHERE { \
  ?subject <http://linkedgeodata.org/ontology/addr%3Acountry> \"DE\" \
} \
LIMIT 25 '
var query2 = "SELECT * FROM <http://dbpedia.org> WHERE { \
    ?city <http://dbpedia.org/property/leaderName> ?leaderName \
} LIMIT 10";
var client = new SparqlClient(endpoint);
console.log("Query to " + endpoint);
console.log("Query: " + query1);
client.query(query1)
  //.bind('city', 'db:Chicago')
  //.bind('city', 'db:Tokyo')
  //.bind('city', 'db:Casablanca')
  //.bind('city', '<http://dbpedia.org/resource/Vienna>')
  .execute(function(error, results) {
  process.stdout.write(util.inspect(arguments, null, 20, true)+"\n");1
});