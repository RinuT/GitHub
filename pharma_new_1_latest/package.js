{
    "name": "pharma-network-updated",
    "author": "author",
    "description": "Start from scratch with a blank business network",
    "version": "0.0.2-deploy.512",
    "devDependencies": {
      "browserfs": "^1.2.0",
      "chai": "^3.5.0",
      "composer-admin": "latest",
      "composer-cli": "latest",
      "composer-client": "latest",
      "composer-connector-embedded": "latest",
      "eslint": "^3.6.1",
      "istanbul": "^0.4.5",
      "jsdoc": "^3.4.1",
      "mkdirp": "^0.5.1",
      "mocha": "^3.2.0",
      "moment": "^2.19.3"
    },
    "keywords": [],
    "license": "Apache 2.0",
    "repository": {
      "type": "e.g. git",
      "url": "URL"
    },
    "scripts": {
      "deploy": "./scripts/deploy.sh",
      "doc": "jsdoc --pedantic --recurse -c jsdoc.conf",
      "lint": "eslint .",
      "postlicchk": "npm run doc",
      "postlint": "npm run licchk",
      "prepublish": "mkdirp ./dist && composer archive create  --sourceType dir --sourceName . -a ./dist/unnamed-network.bna",
      "pretest": "npm run lint",
      "test": "mocha --recursive"
    }
  }