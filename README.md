# Replace with dictionary

辞書に定義した語句で置換を実行します。置換対象は単一のファイルだけでなく、ファイルパスを列挙したリストを用いて一度に複数を指定することもできます。

## リスト

テキストファイルです。置換したいファイルを1行ずつ記述します。

例（list.txt）：

```
/Users/foo/1.html
/Users/foo/2.html
/Users/foo/3.html
```

## 辞書

JavaScriptファイルです。置換したい語句の組み合わせを配列で指定します。正規表現を書くこともできます。

例（dictionary.js）：

```js
module.exports = [

  ['foo', 'bar'],
  ['<li(.*)>foo</li>', '<li$1>bar</li>'],
  ['(<h\\d{1}.*>)見出し(</h(\\d{1})>)', '$1heading$2'],

];
```

## 使用法（CLI）

### 単一ファイルを置換する

```
$ replace-with-dictionary -d <path_to_dictionary>/<your_dictionary>.js -f <path_to_your_target_file>
```

### リストを用いて複数ファイルを置換する

```
$ replace-with-dictionary -d <path_to_dictionary>/<your_dictionary>.js -l <path_to_filelist>/<your_filelist>.txt
```
