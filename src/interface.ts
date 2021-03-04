type Human = {
  name: string,
  age: number,
  greeting(message:string):void
}

// クラスにインターフェイスを適用させる方法（少なくともインターフェイスの条件を満たすよう定義する）
// 適用させるインターフェイスは複数指定することが可能,
// インターフェイスの代わりにタイプエイリアスも指定可能だが、インターフェイスの方がわかりやすい
class Developer implements Human {
  constructor(
    public name: string,
    public age: number,
    // プロパティを追加することも可能
    public experience: number) {
    }
  greeting(message:string) {
    console.log(message)
  }
  
}