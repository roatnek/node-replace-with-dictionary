# Replace with dictionary

辞書（.js）と対象ファイルリスト（.txt）を用いてファイル内の語句を置換します。

## 辞書

例（dictionary.js）：

```js
module.exports = [
  ['foo', 'bar'],
  ['<li(.*)>foo</li>', '<li$1>bar</li>'],
];
```

置換の組み合わせを配列で指定します。正規表現が書けます。

## 対象ファイルリスト

例（list.txt）：

```
/Users/foo/1.html
/Users/foo/2.html
/Users/foo/3.html
```

置換を実行したいファイルを1行1パスで書きます。

## 使用法（CLI）

```
$ node <path_to_replace_with_dictionary>/index.js -d <path_to_dictionary>/<your_dictionary>.js -l <path_to_filelist>/<your_filelist>.txt
```
