// クラスに対してジェネリクスを使用する方法

class LightDataBase<T extends string | number | boolean>{ //ジェネリクスの書き方はこんな感じ
  private data: T[] = [] 
  add(item: T) {  //ユニオン型と似てるが安全性が高い。もしユニオン型だけで指定するとaddのパラメーターもユニオンになってしまう。ジェネリクスを使用することで初めに決めて型のみで運用するため安全となる。
    this.data.push(item)
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item),1)
  }
  get() {
    return this.data
  }
}
const stringLightDataBase = new LightDataBase<string>()
stringLightDataBase.add("apple")
stringLightDataBase.add("banana")
stringLightDataBase.add("orange")
stringLightDataBase.remove("apple")
console.log(stringLightDataBase.get( ))