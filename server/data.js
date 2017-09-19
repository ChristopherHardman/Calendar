var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/events";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    {
      "id": "…",
      "title": "Brief history of Space Shuttle program",
      "date": "2016-10-29 19:00:00+01:00",
      "venue": "NASA History Museum"
    },
    {
      "id": "…",
      "title": "Why did the Challenger explode?",
      "date": "2016-11-31 18:30:00+01:00",
      "venue": "Albert II Library Building"
    },
    {
      "id": "…",
      "title": "Autumn BBQ",
      "date": "2016-11-02 18:30:00+01:00",
      "venue": "Barcelona (TBC)"
    }
  ];
  db.collection("events").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
