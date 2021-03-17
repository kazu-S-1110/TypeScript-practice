// デフォルトの型パラメータの書き方

interface Todo {
  title: string
  text:string
}
type Todoable = Partial<Todo> //全てオプショナルにする
type ReadTodo = Readonly<Todo>　//全てReadOnlyにする

const fetchData :Promise<string>= new Promise(resolve => {
  setTimeout(() => {
    resolve("hello")
  }, 3000);
})

fetchData.then(data => {
  data.toUpperCase()
})

interface ResponseData<T = string> { //イコールで繋げると初期値が設定できる。もし書いてないと設定する際に引数が必要になる。
  data: T
  status: number
}
let tmp: ResponseData
