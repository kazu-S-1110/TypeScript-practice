class Person {
  //インスタンスを作らずにクラスの値を使う方法（newとか使わない方法）
  static species = "ホモ・サピエンス"
  static isAdult(age: number) {
    if (age > 17) return true
    return false
  }
  constructor(public name:string,protected age:number) {
  }
  //もしstaticの値にアクセスする場合はthisを使わずにクラス名を書く
  incrementAge() {
    this.age += 1
    Person.species = "changed!"
  }

  greeting() {
    console.log(`I'm ${this.name},I am ${this.age} old`)
  }
}

// const hoge = new Person("hoge",20);
// hoge.greeting()

class Teacher extends Person{
  // ゲッターはなにかを取得したときに走る関数のこと、セッターはなにかを変更したときに走る関数のこと（ES3では扱えないので注意）
  //ゲッターは必ず一つ以上の値を返すようにする
  get subject():string {
    if (!this._subject) {
      throw new Error('There is no subject')
    }
    return this._subject
  }
  //セッターは必ず一つ以上のプロパティを含める、またゲッターと同じ関数名を設定することが可能(ただし、扱う型は同一でなければならない）
  set subject(value) {
    if (!value) {
      throw new Error('There is no subject')
    } else {
      this._subject = value
    }
  }

  // もし初期化時点でプロパティを追加したいなら以下を書く必要がある
  constructor(name:string,age:number,public _subject:string) {
    super(name,age)
  }
  // メソッドの上書きがしたい場合は、書くしかない。
  greeting() {
    console.log(`I'm ${this.name},I am ${this.age} old, I teach ${this.subject}.`)
  }

}
const teacher = new Teacher("sensei", 40, "English")
// teacher._subject = "Math"
// teacher.greeting()

console.log(Person.species)
console.log(Person.isAdult(20))
//継承先でもstaticにしたものは呼び出しが可能
console.log(Teacher.species)
console.log(Teacher.isAdult(30))

teacher.incrementAge()
console.log(Person.species)
