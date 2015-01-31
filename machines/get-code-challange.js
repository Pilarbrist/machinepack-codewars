module.exports = {

  friendlyName: 'Get code challenge',
  description: 'Returns information about a specific code challenge (kata)',
  cacheable: true,

  inputs: {
    id_or_slug : {
      description: 'The slug or id of a code challenge.',
      example: 'valid-braces',
      required: true
    }
  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'Codewars get-code-challenge api error occurred.'
    },
    success: {
      "id": "5277c8a221e209d3f6000b56",
      "name": "Valid Braces",
      "slug": "valid-braces",
      "category": "algorithms",
      "publishedAt": "2013-11-05T00:07:31Z",
      "approvedAt": "2013-12-20T14:53:06Z",
      "languages": [
        "javascript",
        "coffeescript"
      ],
      "url": "http://www.codewars.com/kata/valid-braces",
      "rank": {
        "id": -4,
        "name": "4 kyu",
        "color": "blue"
      },
      "createdBy": {
        "username": "xDranik",
        "url": "http://www.codewars.com/users/xDranik"
      },
      "approvedBy": "xDranik",
      "description": "Write a function called `validBraces` that takes a string of braces, and determines if the order of the braces is valid. `validBraces` should return true if the string is valid, and false if it's invalid.\n\nThis Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!\n\nAll input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'. \n\n<b>What is considered Valid?</b>\nA string of braces is considered valid if all braces are matched with the correct brace. <br/>\nFor example:<br/>\n'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.\n\n\n<b>Examples:</b> <br/>\n`validBraces( \"(){}[]\" )` => returns true <br/>\n`validBraces( \"(}\" )` => returns false <br/>\n`validBraces( \"[(])\" )` => returns false <br/>\n`validBraces( \"([{}])\" )` => returns true <br/>\n",
      "totalAttempts": 4911,
      "totalCompleted": 919,
      "totalStars": 12,
      "tags": [
        "Algorithms",
        "Validation",
        "Logic",
        "Utilities"
      ]
    }
  },

  fn: function(inputs, exits) {
    var request = require('request');

    request({
        method: 'GET',
        uri: 'https://www.codewars.com/api/v1/code-challenges/' + inputs.id_or_slug,
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
