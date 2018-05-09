# Replace with dictionary

Replace text in a file using a dictionary. You can replace in not only a single file but also multiple files at once using a list of file paths.

## Install

```
$ npm install replace-with-dictionary
```

## Usage（CLI）

### Replace text in a single file

```
$ replace-with-dictionary -d <path_to_dictionary>/<your_dictionary>.js -f <path_to_your_target_file>
```

### Replace text in multiple files (using a list of file paths)

```
$ replace-with-dictionary -d <path_to_dictionary>/<your_dictionary>.js -l <path_to_filelist>/<your_filelist>.txt
```

## Options

```
-d, --dict     Defines a dictionary file
-f, --file     Defines a target file for replacement
-l, --list     Defines a list of target files for replacement
```

## Files

### Dictionary

JavaScript file. You write a pair of words with array for replacement. You can use a regular expression.

```js
module.exports = [
  ['foo', 'bar'],
  ['<li(.*)>foo</li>', '<li$1>bar</li>'],
  ['(<h\\d{1}.*>)見出し(</h(\\d{1})>)', '$1heading$2'],
];
```

### List

Text file. You write a file path each lines.


```
/Users/foo/1.html
/Users/foo/2.html
/Users/foo/3.html
```
