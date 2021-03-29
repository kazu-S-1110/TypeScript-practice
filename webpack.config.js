const path = require('path');

module.exports = {
  entry: './dist/main.js', //webpackがビルドする際に開始点となるJSファイルを設定
  output: {
    filename: 'bundle.js', //[contenthash]と先頭に書くことで中身をハッシュ化した値を付与できる。キャッシュによる齟齬の対策に有効。
    path: path.resolve(__dirname, 'dist'), //pathには絶対パスを指定する。webpack.configはcommonjsのため、requireでpathを取得できる。resolveのメソッドで回すことで簡単に書くことが可能。windowsだとスラッシュで区切られてないので有用。
  },
  devtool: 'inline-source-map', //ソースマップの表示。https://webpack.js.org/configuration/devtool/で詳しく見れるよ
};
