const axios = require('axios');

module.exports = {

  home: async function(req,res) {
    const { data } = await axios.get(
      "https://scrambled-api.mysportsfeeds.com/v2.1/pull/nhl/2021-playoff/date/20210518/games.json",
      {
        auth: {
          username: "a5476a8b-ee6c-43e7-983f-7de7de",
          password: "MYSPORTSFEEDS"
        },
        headers: {
          "Accept": "application/json",
        }
      }
    );
    console.log('data: ',data);
    // return res.ok('tennis');
    //TODO get sports data!!!
    // CSV, JSON, XML
    return res.ok(data);
  }

}
