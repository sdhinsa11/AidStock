import { body, validationResult, matchedData} from "express-validator";
import {getItems, getCategory, getItemDb} from "../storage/queries.js"; // holds the functions we want to call


async function getAllItems(req, res){
    const items = await getItems(); // using the DB
    res.render("items", {
        items: items
        

    });

    // console.log(items);
}


async function getItem(req, res){

    const { id } = req.params;
    const item = await getItemDb(id); // getting the item by ID - did not destructure it like this { item } because it doesn't return an object that says item and so in queries.js we needed to go into the rows and return the first index
    
    if (!item) {
		res.status(404).send("Item not found");
		return; 
	}

    res.render("singleItem", {item: item});
}


export {getAllItems, getItem}