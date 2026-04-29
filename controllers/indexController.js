import { body, validationResult, matchedData} from "express-validator";
// import {getItems} from "../storage/queries.js";


export async function displayHome(req, res){
    // show the index page
    res.render("index");
}