const axios = require('axios');
const defaults = require('./default');

const url = 'json/'

let ipapi = {

    getip: function(){
        return axios({
            ...defaults,
            method: 'get',
	        url: `${url}`
        })
    }

}

module.exports = ipapi;