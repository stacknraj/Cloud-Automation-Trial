const fetch = require('node-fetch');

//replace with your url from the service manager binding
const url = "https://f4195a6dtrial.authentication.us10.hana.ondemand.com";
const oauthUrl = url + "/oauth/token?grant_type=client_credentials";
//replace with your sm_url
const smUrl = "https://service-manager.cfapps.us10.hana.ondemand.com";
//fill in your clientid and clientsecret here or remove lines 9-11 and uncomment line 12 to use environment variables
const clientId = "sb-53dd8c04-4264-4028-bca9-e22e03c9aa04!b388510|service-manager!b1476";
const clientSecret = "a9e4bd2e-8e10-4c18-b580-b9d8c5e9a2ec$pB4jwWjDWv2HkGTypJDi7xf7Cev_s0QHFtf9Q_0evDU=";
const auth = "Basic " + Buffer.from(clientId + ":" + clientSecret).toString('base64');
//const auth = "Basic " + Buffer.from(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET).toString('base64');
//Note, on Windows, precede | with ^| in the clientid when setting the environment variable

//replace with your HANA Database instance id
const instanceId = "61554ac6-5795-4162-86a9-70bbb2bdfcfe";

const authHeaders = {
    "Content-Type": "application/json",
    "Authorization": auth
}

var requestHeaders = {
    "Content-Type": "application/json",
    "authorization": "Bearer "
}

const jsonData = {
    "parameters": {
        "metadata": {
            "ui.hc.sap.com/description": "Updated via service manager REST API"
        }
    }
}

const newURL = smUrl + "/v1/service_instances/" + instanceId;
console.log("Updating description for instance: " + newURL);

//get the bearer token
fetch(oauthUrl, { method: 'GET', headers: authHeaders })
    .then((res) => {
        return res.json()
    })
    .then((authResult) => {
        //add the bearer token to the authorization header
        requestHeaders.authorization = requestHeaders.authorization + authResult.access_token;

        //make a request to update the description
        fetch(newURL, { method: 'PATCH', headers: requestHeaders, body: JSON.stringify(jsonData) })
            .then((res) => {
                console.log("HTTP Status: " + res.status);
                return res.text(); // Use .text() to log raw response
            })
            .then((text) => {
                console.log("Raw Response:", text);
                try {
                    const json = JSON.parse(text);
                    console.log("Parsed JSON:", json);
                } catch (err) {
                    console.error("Failed to parse JSON:", err.message);
                }
            });
    });


// get call
// implement a get call using smURL AND GET THE RESPONSE AND SHOW THE JSON RESULT
// get the bearer token
// fetch(oauthUrl, { method: 'GET', headers: authHeaders })
//     .then((res) => {
//         return res.json();
//     })
//     .then((authResult) => {
//         // add the bearer token to the authorization header
//         requestHeaders.authorization = requestHeaders.authorization + authResult.access_token;

//         // make a GET request to fetch the instance details
//         fetch(newURL, { method: 'GET', headers: requestHeaders })
//             .then((res) => {
//                 return res.json();
//             })
//             .then((result) => {
//                 console.log(JSON.stringify(result, null, 2));
//             });
//     });



// fetch(oauthUrl, { method: 'GET', headers: authHeaders })
//     .then((res) => {
//         return res.json();
//     })
//     .then((authResult) => {
//         // Add the bearer token to the authorization header
//         requestHeaders.authorization = requestHeaders.authorization + authResult.access_token;

//         // JSON data for the PATCH request
//         const patchData = {
//             "parameters": {
//                 "metadata": {
//                     "ui.hc.sap.com/description": "Created as part of Automation Tutorial!"
//                 }
//             }
//         };

//         // Make a PATCH request to update the instance description
//         fetch(newURL, {
//             method: 'PATCH',
//             headers: requestHeaders,
//             body: JSON.stringify(patchData)
//         })
//             .then((res) => {
//                 console.log("PATCH HTTP Status: " + res.status);
//                 return res.json();
//             })
//             .then((patchResult) => {
//                 console.log("PATCH Response:");
//                 console.log(JSON.stringify(patchResult, null, 2));
//             });
//     });