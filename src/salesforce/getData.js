const { default: axios } = require("axios");

class getdata {
    constructor() {
        this.getdata();
    }
    async getdata() {
        const response = await axios("https://www.boredapi.com/api/activity");
        return response.data;
    }
}
module.exports = getdata;