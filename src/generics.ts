// conditional types (型のif)

type conditionalTypes = "tomato" extends string ? number : boolean; //三項演算子のような書き方
type conditionalTypes2 = 33 extends string ? number : boolean;
type conditionalTypes3 = string extends "tomato" ? number : boolean;

//infer R の使い方
type conditionalTypeInfer = { tomato: "tomato" } extends { tomato: infer R } ? R : boolean;
type conditionalTypeInfer2 = { tomato: string } extends { tomato: infer R } ? R : boolean;
type conditionalTypeInfer3 = { banana: "tomato" } extends { tomato: infer R } ? R : boolean;
// 代入元にRを返す、もしInfer以外が一致しないときはfalseとなる
// utility(ReturnType)がある 
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;



// DistributiveConditionalTypes の使い方
type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let tmp: DistributiveConditionalTypes<"tomato" | "pumpkin">;
let tmp2: DistributiveConditionalTypes<"hoge" | "tomato">
// ユニオン型になるようなもの
// utility(NonNullable)がある
let tmp3 :NonNullable<string | null> //type NonNullable<T> = T extends null | undefined ? never : T;
