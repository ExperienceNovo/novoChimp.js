/** BOOT **/

//load from npm
var inquirer = require('inquirer'); //for future back-end email management client
var rx = require('rx'); //for future back-end email management client

//MailChimp API
var MailChimpAPI = require('mailchimp').MailChimpAPI;
var apiKey = '7fba44b2c63ef630fe982a9ffee81911-us11';

try {
    var chimp = new MailChimpAPI(apiKey, { version : '2.0' }); //3.0 is not yet supported in node.
} catch (error) {
    console.log(error.message);
}

/** Email Management Client **/

/** Functions by Object **/

/* Campaigns */

/* Lists */
var lists = [
    ['Potential Customers','9e4eab06db'],
    ['Current Customers','912d65268e'],
    ['Potential Dealers','3d464ddfce'],
    ['Current Dealers','158be3cd03'],
    ['Active Boaters','68376b572f'],
]

function fourlupe() {
    for (var i = 0; i < lists.length; i++) {

    }
};



//retrieve list info ** WORKS **
function retrieveListInfo() {
    chimp.call('lists','list', { start: 0, limit: 25 }, function (error, data) {
        if (error)
            console.log(error.message);
        else
            console.log(data); // Do something with your data!
    });
};

//retrieve email addresses from a list
function retrieveEmailsByList() {
    for (var i = 0; i < lists.length; i++) {
        // do stuff
    }
    //console.log
};

//add information to a list depending on which fields are populated (subscribe)

//unsubscribe from all emails
for (var i = 0; i < lists.length; i++) {
    var bins = lists[i];
    chimp.call('lists','unsubscribe', bins[1], function (error, data) { //currently there is an error specifying the id value. Tried using bins[1] to refer to the array.
        if (error)
            console.log(error.message);
        else
            console.log(data); // Do something with your data!
    });
}

function subscribeTo() {
    //if certain fields are populated, then subscribe to X list.
    //console.log
    }
;

//remove an email from a list
function removeEmails() {
    //list emails you would like to remove, comma separated
    //specify list or scan all lists
    //delete email and associated information from the list
    //console.log
    }
;

/* Templates */

/* Automation Tasks */

/* Conversations */