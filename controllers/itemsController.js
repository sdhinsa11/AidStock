import { body, validationResult, matchedData} from "express-validator";
import {getItems, getCategory, getSpecificItems, getItem} from "../storage/queries.js"; // holds the functions we want to call


export async function getAllItems(req, res){
    const items = await getItems(); // using the DB
    res.render("items", {
        items: items
        

    });

    console.log(items);
}


async function showItem(req, res){

    const { id } = req.params;
    const { item } = await getItem(id); // getting the item by ID
    
    if (!msg) {
		res.status(404).send("Msg not found");
		return; 
	}

    res.render("singleMessage", {item: msg});
}
