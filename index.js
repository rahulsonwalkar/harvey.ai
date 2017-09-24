var client = require('nexosis-api-client').default;
var nexosisClient = new client({ key: process.env.NEXOSIS_API_KEY });

nexosisClient.DataSets.get("mydataset");
nexosisClient.Sessions.get("b19d17da-ec5c-4de8-81af-53b4bf486bae");
nexosisClient.Imports.list();

nexosisClient.Sessions
.get("b19d17da-ec5c-4de8-81af-53b4bf486bae")
.then(
    (data) => { console.log(data); }
);
