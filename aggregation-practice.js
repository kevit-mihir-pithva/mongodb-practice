const mongoose = require("mongoose");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

async function dbconnection() {
    try {
        const client = await MongoClient.connect("mongodb://localhost:27017/");
        console.log("connected");
        const db = client.db("PracticeDB");

        // Exercise 1
        // const data = await db.collection("player").aggregate([
        //     {
        //         $group:{
        //             _id:"$Batting_Hand",
        //             numberOfPlayers:{
        //                 $sum:1
        //             }
        //         }
        //     }
        // ]).toArray()
// ----------------------------------------------------------------------------------------------------------------------
        // Exercise 2
        // const data = await db.collection("player").aggregate([
        //     {
        //         $group:{
        //             _id:"$Country",
        //             numberOfPlayers:{
        //                 $sum:1
        //             }
        //         }
        //     }
        // ]).toArray()
// ----------------------------------------------------------------------------------------------------------------------
        // Exercise 3
        // const data = await db.collection("player").aggregate([
        //     {
        //         $group:{
                    // _id:{
                    //     country:"$Country",
                    //     battingHand:"$Batting_Hand"
                    // },
        //             numberOfPlayers:{
        //                 $sum:1
        //             }
        //         }
        //     }
        // ]).toArray()
// ----------------------------------------------------------------------------------------------------------------------
        // Exercise 4
        // const data = await db.collection("player").aggregate([
        //     {
        //         $match:{
        //             Batting_Hand:{
        //                 $ne:null
        //             }
        //         }
        //     },
        //     {
        //         $group:{
        //             _id:"$Batting_Hand",
        //             numberOfPlayers:{
        //                 $sum:1
        //             }
        //         }
        //     }
        // ]).toArray()
// ----------------------------------------------------------------------------------------------------------------------
        // Exercise 5
        // const data = await db.collection("player").aggregate([
        //     {
        //         $match:{
        //             Batting_Hand:{
        //                 $ne:null
        //             }
        //         }
        //     },
        //     {
        //         $group:{
        //             _id:"$Country",
        //             numberOfPlayers:{
        //                 $sum:1
        //             }
        //         }
        //     }
        // ]).toArray()
// ----------------------------------------------------------------------------------------------------------------------
        // Exercise 6
        // const data = await db.collection("player").aggregate([
        //     {
        //         $match:{
        //             Batting_Hand:{
        //                 $ne:null
        //             }
        //         }
        //     },
        //     {
        //         $sort:{
        //             Player_Name:1
        //         }
        //     },
        //     {
        //         $group:{
        //             _id: {
        //                 country:"$Country",
        //             },
        //             players:{
        //                 $push:"$$ROOT"
        //             },
        //             numberOfPlayers:{
        //                 $sum:1
        //             },
        //             left_handed: {
        //                 $sum: {
        //                   $cond: {
        //                     if: {
        //                       $eq: ["$Batting_Hand", "Left_Hand"],
        //                     },
        //                     then: {
        //                       $sum: 1,
        //                     },
        //                     else: {
        //                       $sum: 0,
        //                     },
        //                   },
        //                 },
        //             },
        //             right_handed: {
        //                 $sum: {
        //                   $cond: {
        //                     if: {
        //                       $eq: ["$Batting_Hand", "Right_Hand"],
        //                     },
        //                     then: {
        //                       $sum: 1,
        //                     },
        //                     else: {
        //                       $sum: 0,
        //                     },
        //                   },
        //                 },
        //             }
        //         }
        //     }
        // ]).toArray()
// ----------------------------------------------------------------------------------------------------------------------
        // Exercise 7
        // const data = await db.collection("emps").aggregate([
        //     {
        //         $unwind:"$_empDepartment"
        //     }
        // ]).toArray()
// ----------------------------------------------------------------------------------------------------------------------
        // Exercise 8(Doubt..)
        // const data = await db.collection('emps').aggregate([
        //     {
        //         $unwind:{
        //             path:"$_empDepartment",
        //             includeArrayIndex:"dept_array_index"
        //         }
        //     }
        // ]).toArray()
// ----------------------------------------------------------------------------------------------------------------------
        // Exercise 9
        // const data = await db.collection('emps').aggregate([
        //     {
        //         $unwind:"$_empDepartment"
        //     },
        //     {
        //        $group:{
        //         _id:"$_empId",
        //         departments:{
        //             $push:"$_empDepartment"
        //         },
        //         numberOfDepartment:{
        //             $sum:1
        //         }
        //        }
        //     }
        // ]).toArray()

        //OR
        
        // const data = await db.collection('emps').aggregate([
        //     {
        //         $project:{
        //             _id:0,
        //             _empId:1,
        //             _empName:1,
        //             numberOfDepartments:{
        //                 $size:"$_empDepartment"
        //             }
        //         }
        //     }
        // ]).toArray()
// ----------------------------------------------------------------------------------------------------------------------
        // Exercise 10
        // const data = await db.collection('emps').aggregate([
        //     {
        //         $unwind:"$_empDepartment"
        //     },
        //     {
        //        $match:{
        //         _empId:{
        //             $gte:3
        //         }
        //        }
        //     },
        //     {
        //         $group:{
        //             _id:"$_empDepartment",
        //             numberOfEmployes:{
        //                 $sum:1
        //             }
        //         }
        //     }
        // ]).toArray()

        console.log(data);
        console.log(data.length);
    } catch (error) {
        console.log(error);
    }
}
dbconnection();


