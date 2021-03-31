// declare module "lodash" { //手動で型定義ファイルを記述する方法
//   export function shuffle<T>(arr:T[]):T[]
// }
// interface Lodash {
//   shuffle<T>(arr:T[]):T[]
// }
// const _ :Lodash
// declare namespace _ {
//   function shuffle<T>(arr:T[]):T[]
// }

// declare global {
// const hello;string
// }
// declare globalで定義した変数や型はグローバル上でどこでも使えるもの。
// もし型定義ファイルでdeclare globalを見かけたら便利なものなのでチェックしておく。
