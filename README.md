# Replace with dictionary

リストで指定したファイルを対象に、辞書で定義した語句の置換を実行します。

## リスト

置換を実行したいファイルを1行1パスで書きます。

例（list.txt）：

```
/Users/foo/1.html
/Users/foo/2.html
/Users/foo/3.html
```

## 辞書

置換の組み合わせを配列で指定します。正規表現を書くこともできます。

例（dictionary.js）：

```js
module.exports = [
  ['foo', 'bar'],
  ['<li(.*)>foo</li>', '<li$1>bar</li>'],
];
```

## 使用法（CLI）

```
$ node <path_to_replace_with_dictionary>/index.js -d <path_to_dictionary>/<your_dictionary>.js -l <path_to_filelist>/<your_filelist>.txt
```
