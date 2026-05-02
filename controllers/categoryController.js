import { body, validationResult, matchedData} from "express-validator";
import {getCategory} from "../storage/queries.js";


export async function getCategories(req, res){

    const categories = await getCategory(); // cannot use {categories} because that would be destructuring
    
    if (!categories) {
		res.status(404).send("Not found");
		return; 
	}

    res.render("categoryView", {categories: categories});
}

// add a category