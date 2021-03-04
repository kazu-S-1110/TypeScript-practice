//復習タイプエイリアス（なんでも適用ができる）
type Human = {
  name: string,
  age:number
}
//タイプインターフェイス(オブジェクトのみしか適用できない＝＞逆に言えばオブジェクトのみを指し示す）
interface HUman {
  name: string,
  age:number
}

const human: Human = {
  name: "peter",
  age:20
}
const developer: Human ={
  name: "hoge",
  age:10
}