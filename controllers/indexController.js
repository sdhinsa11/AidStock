import { body, validationResult, matchedData} from "express-validator";
import {getItems} from "../storages/queries.js"; // holds the functions we want to call


export async function displayHome(req, res){
    // show the index page
    res.render("index");
}