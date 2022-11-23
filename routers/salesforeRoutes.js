const express = require('express');
const router = express.Router();
const axios = require('axios');
const get = require("../src/salesforce/getData");
const auth = require("../src/salesforce/auth");
router.get("/reponse", async(req, res) => {
    const getd = new get();
    let response = await getd.getdata();
    res.send(response);
})
router.get("/accessToken", async(req, res) => {
    const authorize = new auth();
    const accessToken = await authorize.saleforceAcessToken();
    res.send(accessToken);
})
router.get("/value-b", (req, res) => {
    res.send("data from value-b");
})

module.exports = router;