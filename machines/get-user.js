module.exports = {

  friendlyName: 'Get user details',
  description: 'Returns information about a specific user',
  cacheable: true,

  inputs: {
    id_or_username: {
      description: 'The user or id of the codewars user',
      example: 'some_user',
      required: true
    }
  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'Codewars get-user api error occurred.'
    },
    success: {
      description: 'User Information Successfully Retrieved.',
      example: {
        "username": "some_user",
        "name": "Some Person",
        "honor": 544,
        "clan": "some clan",
        "leaderboardPosition": 134,
        "skills": [
          "ruby",
          "c#",
          ".net",
          "javascript",
          "coffeescript",
          "nodejs",
          "rails"
        ],
        "ranks": {
          "overall": {
            "rank": -3,
            "name": "3 kyu",
            "color": "blue",
            "score": 2116
          },
          "languages": {
            "javascript": {
              "rank": -3,
              "name": "3 kyu",
              "color": "blue",
              "score": 1819
            },
            "ruby": {
              "rank": -4,
              "name": "4 kyu",
              "color": "blue",
              "score": 1005
            },
            "coffeescript": {
              "rank": -4,
              "name": "4 kyu",
              "color": "blue",
              "score": 870
            }
          }
        },
        "codeChallenges": {
          "totalAuthored": 3,
          "totalCompleted": 230
        }
      }
    }
  },

  fn: function (inputs, exits) {
    var request = require('request');

    request({
        method: 'GET',
        uri: 'https://www.codewars.com/api/v1/users/' + inputs.id_or_username,
        headers: {
          Authorization: 'Jk_1ik9TVbT52GZyt1eS'
        }
      },
      function (err, res, body) {
        if (err) return exits.error(err);
        return exits.success(body);
      });
  }

};
