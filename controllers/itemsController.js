import { body, validationResult, matchedData} from "express-validator";
import {getItems, getCategoryItems, getItemDb, addItemDb, getCategory} from "../storage/queries.js"; // holds the functions we want to call


async function getAllItems(req, res){
    // check if there are params

    // there is filtering on the category
    if (req.query.category){
        
        const category = req.query.category;
        const items = await getCategoryItems(category);

        res.render("items", {
            items: items,
            backLink: "/categories",
            originalUrl: req.originalUrl // takes the original url to go back to

        });


    }

    
    // no items there 
    else{
        const items = await getItems(); // using the DB
        res.render("items", {
            items: items,
            backLink: "/", // go back to home
            originalUrl: req.originalUrl // takes the original url to back to
        });

    }
    

    // console.log(items);
}


async function getItem(req, res){

    const { id } = req.params;
    const backLink = req.query.returnTo || "/items";
    const item = await getItemDb(id); // getting the item by ID - did not destructure it like this { item } because it doesn't return an object that says item and so in queries.js we needed to go into the rows and return the first index
    
    if (!item) {
		res.status(404).send("Item not found");
		return; 
	}

    res.render("singleItem", {item: item, backLink: backLink}); // this will alwasy be here because it's alwasy passed through as "/items" or the category filter
}

async function addItemForm(req, res){

    const categories = await getCategory();

    const returnTo = req.query.returnTo;

    res.render("addItem", {categories: categories, backLink: req.query.returnTo, returnTo: returnTo});

}

async function addItem(req, res){

	// var msgs = getAllMessages();
	
	const {
        item_name,
        desc,
        quantity,
        unit,
        exp_date,
        category_id,
        returnTo
    } = req.body;

	await addItemDb(item_name, desc, quantity, unit, exp_date, category_id); // query from the database
	
	// add the new message to this list - this should go in the db.js file
	// msgs.push({id: uuidv4(), text: desc, user:users_name, added: new Date() });
	
	// redirect to the index page  - https://stackoverflow.com/questions/42034898/redirect-from-one-route-to-another-in-express
	res.redirect(returnTo || "/items");

}




export {getAllItems, getItem, addItem, addItemForm};