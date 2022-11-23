const express = require('express');
const app = express();
const salesforceRoute = require("./routers/salesforeRoutes");
let port = 9900;

app.use("/salesforce", salesforceRoute);


app.listen(port, () => {
    console.log("the server is running on", port);
})