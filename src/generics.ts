// インターフェイスに対してジェネリクスを使用する方法

class LightDataBase<T extends string | number | boolean>{ 
  private data: T[] = [] 
  add(item: T) {  
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
console.log(stringLightDataBase.get())

interface TmpDataBase<T>{ //タイプエイリアスでも同様
  id: number,
  data:T[]
}
const tmpDataBase: TmpDataBase<number> ={
  id: 2,
  data:[34,43,53]
}