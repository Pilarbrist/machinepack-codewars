module.exports = {

  friendlyName: 'Train next code challenge',
  description: 'Begins a new training session for the next code challenge (kata) within your training queue',
  cacheable: true,

  inputs: {
    language : {
      description: 'The programming language you wish to train on.',
      example: 'javascript',
      required: true
    },
    strategy : {
      description: 'The strategy to use for choosing what the next code challenge should be.',
      example: 'random',
      required: false
    },
    peek : {
      description: 'Boolean - true if you only want to peek at the next item in your queue, without removing it from the queue or beginning a new training session.',
      example: true,
      required: false
    }
  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'Codewars get-code-challenge api error occurred.'
    },
    success: {
      "success":true,
      "name":"Anything to integer",
      "slug":"anything-to-integer",
      "description":"Your task is to program a function which converts any input to an integer.\n\nDo not perform rounding, the fractional part should simply be discarded.\n\nIf converting the input to an integer does not make sense (with an object, for instance), the function should return 0 (zero).\n\nAlso, Math.floor(), parseInt() and parseFloat() are disabled for your unconvenience.\n\nOnegaishimasu!",
      "author":"Jake Hoffner",
      "rank":-6,
      "averageCompletion":125.4,
      "tags":[
        "Fundamentals",
        "Integers",
        "Data Types",
        "Numbers"
      ],
      "session":{
        "projectId":"533f66fba0de5d94410001ec",
        "solutionId":"53bc968d35fd2feefd000004",
        "setup":"function toInteger(n) {\n  \n}",
        "exampleFixture":"Test.expect(toInteger(\"4.55\") === 4)",
        "code":null
      }
    }
  },

  fn: function(inputs, exits) {
    var request = require('request');

    request({
        method: 'POST',
        uri: 'https://www.codewars.com/api/v1/code-challenges/' + inputs.language + '/train',
        headers: {
          Authorization: 'Jk_1ik9TVbT52GZyt1eS'
        },
        body: {
          strategy: inputs.strategy,
          peek: inputs.peek
        },
        json: true
      },
      function (err, res, body) {
        if (err) return exits.error(err);
        return exits.success(body);
      });
  }

};
