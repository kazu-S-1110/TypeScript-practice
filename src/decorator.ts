//アクセサーデコレータの使い方

function Logging() {
  console.log('１、Logging Factory');
  return function Logging(constructor: Function) {
    console.log('２、Logging...');
  };
}

function Component(template: string, selector: string) {
  console.log('Component Factory');
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log('Component');
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector('h1')!.textContent = instance.name;
        }
      }
    };
  };
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('propertyLogging');
  console.log(target);
  console.log(propertyKey);
}
function MethodLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log('MethodLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}
function AccessorLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  //引数は3つ

  console.log('AccessorLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor); //メソッドデコレーターと少し似ている。get()とset()が定義されている。
}

// @Logging()
@Component('<h1>{{name}}</h1>', '#app') //index.htmlにある#appにh1タグを埋め込むよう作成してみる
class User {
  @PropertyLogging
  name = 'yaoooooo';
  constructor(private _age: number) {
    console.log('User was created!');
  }
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }

  @MethodLogging //適用方法
  greeting() {
    console.log('hello!');
  }
}

const user1 = new User(32);
const user2 = new User(34);
