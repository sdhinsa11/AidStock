import { body, validationResult, matchedData} from "express-validator";
import {getItems, getCategory, getSpecificItems} from "../storages/queries.js"; // holds the functions we want to call


export async function getAllItems(req, res){
    const usernames = await getAllItems(); // using the DB
    res.render("index", {
        

    });

    console.log(usernames);
}
