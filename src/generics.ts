// ジェネリック型のUtility型の学習（型のライブラリ）

interface Todo {
  title: string
  text:string
}
//型のライブラリの紹介（Typescriptが内臓している）
type Todoable = Partial<Todo> //全てオプショナルにする
type ReadTodo = Readonly<Todo>　//全てReadOnlyにする

//またPromise でもジェネリック型が使える場面がある。
const fetchData :Promise<string>= new Promise(resolve => {
  setTimeout(() => {
    resolve("hello")
  }, 3000);
})

fetchData.then(data => {
  data.toUpperCase()
})
// 配列もジェネリック型が使える
const vegetables:Array<string> = ["tomato","brocoli","asparagus"]