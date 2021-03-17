// MappedTypesを学習（型のfor文的な感じ）
interface Tmp {
  readonly "tomato": string
  "pumpkin":string
}

type MappedTypes= {
  -readonly [P in keyof Tmp]-?: P //こう書くとリテラル型になる,stringにすると文字列型になる、また先頭にreadonlyをつけることも可能, -（マイナス）をつけるとreadonlyを消すことができる
}

