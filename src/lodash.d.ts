// 型定義ファイルの拡張方法,使う際は名前付きエクスポートで使う（例：import {shuffle} from "axios"
import axios from "axios"
declare module axios {　
  export function shuffle<T>(arr:T[]):T[] 　//新たに関数を追加する方法
}

import _ from "lodash"
declare module "lodash" { 
  interface LoDashStatic { //既存のinterfaceを拡張する方法　
    hello :string
  }
}

//既存のinterfaceを継承して拡張する方法
interface foo extends _.LoDashExplicitWrapper {}


// declare global {
// const hello;string
// }
// declare globalで定義した変数や型はグローバル上でどこでも使えるもの。
// もし型定義ファイルでdeclare globalを見かけたら便利なものなのでチェックしておく。
