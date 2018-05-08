# Test for replace-with-dictionary

- dictionary
    - `test/dict-en_to_ja.js`
    - `test/dict-ja_to_en.js`
- replace target
    - `test/target-en.html`
    - `test/target-ja.html`
    - `test/target-ja-sjis.html`
- list of replace targets
    - `test/list-ja.txt`

## Test 1: Japanese to English

```
$ replace-with-dictionary -d <path_to_dictionary>/test/dict-ja_to_en.js -f <path_to_your_target_file>/test/target-ja.html
```

## Test 2: English to Japanese

```
$ replace-with-dictionary -d <path_to_dictionary>/test/dict-en_to_ja.js -f <path_to_your_target_file>/test/target-en.html
```

## Test 3: Japanese to English (Shift_JIS encoding)

```
$ replace-with-dictionary -d <path_to_dictionary>/test/dict-ja_to_en.js -f <path_to_your_target_file>/test/target-ja-sjis.html
```

## Test 4: Japanese to English (with list)

```
$ replace-with-dictionary -d <path_to_dictionary>/test/dict-ja_to_en.js -l <path_to_your_target_file>/test/list-ja.txt
```
