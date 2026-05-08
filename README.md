# AidStock
A donation inventory tracker for nonprofits managing supplies, stock levels, expiry dates, and donor records.


# Technology 
Node.js, Express.js, HTML, CSS, PostGreSQL 

# Learnings

Using query parameters:
1. First define the layout in the ejs file for the query parameters 
2. Then in the controller grab that param by doing req.query and it will put in a dictionary all the query params seperated byt an & symbol but the query parameters is seperated by a "?" from the route that's how it parses it 


Using back links:
1. From the page you want to return too pass the original link as a variable through to the other page using req.originalUrl (this is in a controller)
2. On that new page decode it and pass it through a query paramater to that page (this is on the items.ejs page) so that when we are on that last page (leaf page) the link has it and it can be the back url beacuse we want to go to that previous page 

controller (pass originalUrl link to the items page) --> items.ejs (make the query routes) --> itemsController (grab the query parameter and pass it through as the back link variable) --> singleItem (back link is that query param from the previous page and it's passed through to the )
