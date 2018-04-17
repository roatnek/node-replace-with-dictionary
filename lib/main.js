'use strict';

const fs        = require('fs');
const readline  = require('readline');
const replace   = require('replace-in-file');
const argv      = require('argv');
const iconv     = require('iconv-lite');
const jschardet = require('jschardet');

argv.option([
  {
    name: 'dict',
    short: 'd',
    type: 'string',
    // description: 'Defines an option for your script',
    example: "'script --dict=value' or 'script -d value'"
  },
  {
    name: 'file',
    short: 'f',
    type: 'string',
    // description: 'Defines an option for your script',
    example: "'script --file=value' or 'script -f value'"
  },
  {
    name: 'list',
    short: 'l',
    type: 'string',
    // description: 'Defines an option for your script',
    example: "'script --list=value' or 'script -l value'"
  },
]);

const param = argv.run().options;

let dictionary;

fs.access(param.dict, (error) => {
  if (error) {
    if (error.code === 'ENOENT') {
      console.log('Error: dictionary not found.');
    } else {
      console.error(error);
    }

    process.exit(1);
  } else {
    dictionary = require(param.dict);
  }
});

const replaceWithDictionary = (file) => {
  fs.access(file, (error) => {
    if (error) {
      if (error.code === 'ENOENT') {
        console.log(`Error: target "${file}" not found.`);
      } else {
        console.error(error);
        process.exit(1);
      }
    } else {
      const encoding = jschardet.detect(fs.readFileSync(file)).encoding;

      if (encoding != 'UTF-8') {
        const buffer  = fs.readFileSync(file);
        const content = iconv.decode(buffer, encoding).toString('UTF-8');

        fs.writeFileSync(file, content, 'UTF-8');
      }

      for (let word of dictionary) {
        const options = {
          files: file,
          from : new RegExp(word[0], 'g'),
          to   : word[1],
        };

        try {
          replace.sync(options);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      if (encoding != 'UTF-8') {
        const buffer = fs.readFileSync(file);
        const writer = fs.createWriteStream(file);

        writer.write(iconv.encode(buffer, encoding));
        writer.end();
      }
    }
  });
}

if (param.file) {
  replaceWithDictionary(param.file);
}

if (param.list) {
  fs.access(param.list, (error) => {
    if (error) {
      if (error.code === 'ENOENT') {
        console.log('Error: list not found.');
      } else {
        console.error(error);
      }

      process.exit(1);
    } else {
      const list_stream = fs.createReadStream(param.list);
      const list_reader = readline.createInterface({input: list_stream});

      list_reader.on('line', (data) => {
        replaceWithDictionary(data);
      });
    }
  });
}

module.exports = replaceWithDictionary;
