const path = require('path');

module.exports = {
  mode: 'development', //バンドルファイルの形式を選択可能、デフォは"production"
  //使い分けることが一般的なのでdev-serverのときはdev、buildしたい時はproductionとする。
  // webpackのconfigファイルを２つに分ければ解決。package.jsonに追記する。
  entry: './src/library.ts', //webpackがビルドする際に開始点となるファイルを設定
  output: {
    filename: 'bundle.js', //[contenthash]と先頭に書くことで中身をハッシュ化した値を付与できる。キャッシュによる齟齬の対策に有効。
    path: path.resolve(__dirname, 'dist'), //pathには絶対パスを指定する。webpack.configはcommonjsのため、requireでpathを取得できる。resolveのメソッドで回すことで簡単に書くことが可能。windowsだとスラッシュで区切られてないので有用。
  },
  devtool: 'inline-source-map', //ソースマップの表示。https://webpack.js.org/configuration/devtool/で詳しく見れるよ
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    //import文の.jsや.tsの表記を無くすことが可能になる。
    extensions: ['.ts', '.js'],
  },
};
