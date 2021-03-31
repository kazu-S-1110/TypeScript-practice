import  axios  from "axios"; //ライブラリのimportを解決するにはtsconfigでmoduleResolutionを有効化する
import _ from "lodash"
axios.get("https://test.com")

console.log(_.shuffle([1, 2, 3, 4]))

namespace myApp { //スコープを限定して使える、使いたいものがあればexportする。最近はあまり使われなくなってきた。
  const hello = "hello in namespace"
  export const name = "Jack"
  export interface Nameable {
    name:string
  }
}
const hello = myApp.name
let nameable: myApp.Nameable //型注釈でドットが使われている場合はnamespaceが使われていると気づくこと。
