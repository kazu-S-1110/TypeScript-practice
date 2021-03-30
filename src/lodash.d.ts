declare module "lodash" { //手動で型定義ファイルを記述する方法
  export function shuffle<T>(arr:T[]):T[]
}