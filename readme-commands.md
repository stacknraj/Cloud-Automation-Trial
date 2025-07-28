# HANA Credentials  
# HANA_HOST=61554ac6-5795-4162-86a9-70bbb2bdfcfe.hana.trial-us10.hanacloud.ondemand.com  
# HANA_PORT=443  
# HANA_USER=DBADMIN  
# HANA_PASSWORD=Welcome@123  


## login using hdbsql
## hdbsql -n 61554ac6-5795-4162-86a9-70bbb2bdfcfe.hana.trial-us10.hanacloud.ondemand.com:443 -u DBADMIN -p Welcome@123

## creating hdbstore userkey
## hdbuserstore Set AdminUserKey <SQL ENDPOINT> DBADMIN <PASSWORD>

## hdbuserstore list

## execute the file
## hdbsql -U USER1UserKey -I hotel.sql
## hdbsql -U USER1UserKey "SELECT COUNT(*) FROM HOTELS.CUSTOMER";

## hdbsql -A -U USER1UserKey -I statement.sql

## Continue from here
## https://developers.sap.com/tutorials/hana-cloud-automation-pilot.html

## Hana Cloud Instance
## https://f4195a6dtrial.hana-tooling.ingress.orchestration.trial-us10.hanacloud.ondemand.com/hcs/sap/hana/cloud/index.html?

## Database Explorer
## https://f4195a6dtrial.hana-tooling.ingress.orchestration.trial-us10.hanacloud.ondemand.com/hrtt/sap/hana/cst/catalog/cockpit-index.html?databaseid=C433665

## Hana Cloud Trial Login 
## https://account.hanatrial.ondemand.com/trial/#/globalaccount/90171074-6084-4f96-b5ff-84084d81ac00/subaccount/1cd1c1e4-b486-48f4-b436-22f9f16817b8/service-instances