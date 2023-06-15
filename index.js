import { MongoClient } from "mongodb";      ///getting this funtion from library
import { mongoURI } from "./secrets.js";    ///getting our secret connection string

const connection = new MongoClient(mongoURI);       ///connecting to our cluster using our secret string

await connection.connect();                 ///opening the connection to our cluster

const db = connection.db('cluser0');        ///connecting to specific database

await db.collection('students').insertOne({name: "John Therlonge", age: 26})        //add someone

const results = await db.collection('students').findOne({name: "John Therlonge"});  //get someone

console.log(results);

connection.close();