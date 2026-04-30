import { body, validationResult, matchedData} from "express-validator";
import {getItems, getCategory, getSpecificItems} from "../storage/queries.js"; // holds the functions we want to call


export async function getAllItems(req, res){
    const items = await getItems(); // using the DB
    res.render("items", {
        items: items
        

    });

    console.log(items);
}
