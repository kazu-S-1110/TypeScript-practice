//インターセクション型
type Engineer = {
  name: string
  role:string
}
type Blogger = {
  name: string
  follower:number
}
// ＆マークでくっつける (くっつける対象がtypeでもinterfaceでも可能　)
type EngineerBlogger = Engineer & Blogger
// interface EnfineerBlogger extends Bngineer, Blogger {} //この記述も可能

const jack = {
  name: "Jack",
  role: "Back-end",
  follower:300
}

type NumberBoolean = number | boolean
type StringNumber = string | number
type Mix = NumberBoolean & StringNumber　//ユニオン型をインターセクションにする場合はベン図のように考える
