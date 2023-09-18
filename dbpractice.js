const mongoose = require("mongoose");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

async function dbconnection() {
    try {
        const client = await MongoClient.connect("mongodb://localhost:27017/");
        console.log("connected");
        const db = client.db("PracticeDB");

        // Write a MongoDB query to display all the documents in the collection restaurants.
        // const data = await db.collection("restaurants").find().toArray()

        // Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine for all the documents in the collection restaurant
        // const data = await db.collection("restaurants").find({},{ projection: { name: 1,  cuisine: 1,   borough: 1,  restaurant_id: 1}}).toArray();

        // Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine, but exclude the field _id for all the documents in the collection restaurant.
        // const data = await db.collection("restaurants").find({},{ projection: { _id:0 ,name: 1,  cuisine: 1,   borough: 1,  restaurant_id: 1}}).toArray();

        // Write a MongoDB query to display the fields restaurant_id, name, borough, and zip code, but exclude the field _id for all the documents in the collection restaurant.
        // const data = await db.collection("restaurants").find({},{ projection: {  _id:0,restaurant_id: 1, name: 1, borough: 1, cuisine: 1, "address.zipcode":1 }}).toArray()
        
        // Write a MongoDB query to display all the restaurants which are in the borough Bronx.
        // const data = await db.collection("restaurants").find({ borough:"Bronx" }).toArray()

        // Write a MongoDB query to display the first 5 restaurants which are in the borough Bronx.
        // const data = await db.collection("restaurants").find({ borough:"Bronx" }).limit(5).toArray()

        // Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
        // const data = await db.collection("restaurants").find({ borough:"Bronx" }).skip(5).limit(5).toArray()

        // Write a MongoDB query to find the restaurants that achieved a score of more than 90.
        // const data = await db.collection("restaurants").find({ grades : { $elemMatch:{score:{ $gt:90 }}}}).toArray()

        // Write a MongoDB query to find the restaurants that achieved a score, of more than 80 but less than 100.
        // const data = await db.collection("restaurants").find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}}).toArray()

        // Write a MongoDB query to find the restaurants which locate in a latitude value less than -95.754168.
        // const data = await db.collection("restaurants").find({"address.coord" : {$lt : -95.754168}}).toArray()
        
        // Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and whose grade score is more than 70 and latitude less than -65.754168.
        // const data = await db.collection("restaurants").find({$and:[{"cuisine" : {$ne :"American "}},{"grades.score" : {$gt : 70}},{"address.coord" : {$lt : -65.754168}}]}).toArray()

        // Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score of more than 70 and located in the longitude less than -65.754168. Note: Do this query without using $and operator.
        // const data = await db.collection("restaurants").find({"cuisine" : {$ne : "American "}, "grades.score" :{$gt: 70},"address.coord" : {$lt : -65.754168}}).toArray()

        // Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belonging to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
        // const data = await db.collection("restaurants").find({"cuisine" : {$ne : "American "}, "grades.grade" :"A","borough":{$ne:"Brooklyn"}}).toArray()
        
        //Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Wil' as the first three letters of their name.
        // const data = await db.collection("restaurants").find({name: /^Wil/},{projection:{restaurant_id : 1,name:1,borough:1,cuisine :1}}).toArray()
        
        //Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as the last three letters of their name.
        // const data = await db.collection("restaurants").find({name: /ces$/},{projection:{restaurant_id : 1,name:1,borough:1,cuisine :1}}).toArray()
        
        //Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Reg' as three letters somewhere in their name.
        // const data = await db.collection("restaurants").find({name: /Reg/ },{projection:{restaurant_id : 1,name:1,borough:1,cuisine :1}}).toArray()
        
        // Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dishes.
        // const data = await db.collection("restaurants").find({borough: "Bronx" ,$or : [{ cuisine : "American " },{ cuisine : "Chinese" }]}).toArray()

        // Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
        // const data = await db.collection("restaurants").find({borough :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},{projection:{restaurant_id : 1,name:1,borough:1,cuisine :1}}).toArray()
        
        //Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which do not belong to the borough Staten Island or Queens, or Bronxor Brooklyn.
        // const data = await db.collection("restaurants").find({borough :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},{projection:{restaurant_id : 1,name:1,borough:1,cuisine :1}}).toArray()
                
        //Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which achieved a score that is not more than 10.
        // const data = await db.collection("restaurants").find({"grades.score" :{ $not:{$gt : 10}}} ,{projection:{restaurant_id : 1,name:1,borough:1,cuisine :1}}).toArray()
        
        // Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which prepared dishes except 'American' and 'Chinees' or the restaurant's name begins with the letter 'Wil'.  
        // const data = await db.collection("restaurants").find({$or: [{name: /^Wil/}, {cuisine:{$nin:["American ","Chinese"]}}]},{projection:{restaurant_id : 1,name:1,borough:1,cuisine :1}}).toArray()
        
        //Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many survey dates.
        // const data = await db.collection("restaurants").find({grades : {$elemMatch: {date: new Date("2014-08-11T00:00:00Z"), grade:"A", score:11}}}, {projection:{restaurant_id:1,name:1,grades:1}}).toArray()
        
        //Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants where the 2nd element of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
        // const data = await db.collection("restaurants").find({"grades.1.date": new Date("2014-08-11T00:00:00Z"), "grades.1.grade": "A", "grades.1.score": 9 }, {projection:{restaurant_id:1,name:1,grades:1}}).toArray()
        
        // Write a MongoDB query to find the restaurant Id, name, address, and geographical location for those restaurants where the 2nd element of the coord array contains a value that is more than 42 and up to 52.
        // const data = await db.collection("restaurants").find( { "address.coord.1": {$gt : 42, $lte : 52}}, {projection:{restaurant_id:1,name:1,address:1,coord:1}}).toArray()
        
        // Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
        // const data = await db.collection("restaurants").find().sort({name:1}).toArray()
        
        // Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns
        // const data = await db.collection("restaurants").find().sort({name:-1}).toArray()
        
        // Write a MongoDB query to arrange the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.
        // const data = await db.collection("restaurants").find().sort({"cuisine":1,"borough" : -1}).toArray()
        
        // Write a MongoDB query to know whether all the addresses contains the street or not.
        // const data = await db.collection("restaurants").find({"address.street" : { $exists : true }}).toArray()

        // Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
        // const data = await db.collection("restaurants").find({"address.coord" : { $type : "double" }}).toArray()

        // Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
        // const data = await db.collection("restaurants").find({grades: {$elemMatch: {score: {$mod: [7,0]}}}},{_id:0, restaurant_id:1, name:1, grades:1}).toArray()
        
        // Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name.
        // const data = await db.collection("restaurants").find({ name : /mon/},{projection:{name:1}}).toArray()
        
        // Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name.  
        // const data = await db.collection("restaurants").find({ name : /^Mad/},{projection:{name:1}}).toArray()

        console.log(data);
        console.log(data.length);
    } catch (error) {
        console.log(error);
    }
}
dbconnection();


