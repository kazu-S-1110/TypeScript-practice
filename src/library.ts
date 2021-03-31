// import  axios  from "axios"; //ライブラリのimportを解決するにはtsconfigでmoduleResolutionを有効化する
// axios.get("https://test.com")

// import _ from "lodash" //d.tsファイルの無いライブラリも相当ある。（例としてlodash）
//解決策、誰かがd.tsファイルを書いてないか検索する(例　types lodash) 型定義としてtypesフォルダに入るため
//definitelyTypedリポジトリにほとんどある。Typescriptとリポジトリメンバーが管理していて信頼は厚い。
console.log(_.shuffle([1, 2, 3, 4]))
