'use strict';

///////////////////////////////////////////////
//208.Constructor Functions and the new Operator
//コンストラクタ関数を使っていきましょう。
//コンストラクタ関数と言っても、全然普通の関数です、
//唯一の違うことは、new演算子でコンストラクタ関数を呼び出すことです

// //「人」で例を作ってみましょう
// //なお、コンストラクタ関数は、常に大文字で始まるというルールがあります
// const Person = function(firstName,birthYear){
// //   // console.log(this); //これだとPerson {}と表示される
// //   //>>>>>>>>プロパティ
//   this.firstName = firstName;
// //   //ここでは、thisキーワードが、空のオブジェクトを意味する
//   this.birthYear = birthYear;
// //   //返されたオブジェクトが、私たちがここで作ろうとしているオブジェクトになります
// //   //引数のパラメータを受け取って、そのプロパティを設定するように記入する
// //   //今回は引数とプロパティを同じ名前にしましたが、別に必ず同じ名前でなくてはいけないということではない
// //   //引数は、「インスタンスプロパティ」にもなりえるのわかりますか？だってpersonのインスタンスでやりますので、インスタンスプロパティになりますよね。
// //   //だって、インスタンス化すれば、この引数を利用できるわけになります
// //   //>>>>>>>>関数
// //   //このようにしてメソッドを書くことはできます、、、が、コンストラクタ関数の中でメソッドは絶対に作成しないでください
// //   //理由は、このコンストラクタ関数を使って、信じられない数の人のオブジェクトを作るとなると全てのインスタンス化されたオブジェクトがこの関数を持ち運ぶことになる
// //   //そうすると、この関数のコピーを信じられない数分作ることになるので、コードパフォーマンスに影響が出ます
// //   // this.calcAge = function(){
// //   //   console.log(2023 - this.birthYear);
// //   // }
// // };
// // //new演算子で関数を呼び出します。インスタンス化
// const Miya = new Person('Miya',1999);
// // //それを新しく作った変数にnew演算子で関数を呼び出したものを格納する
// console.log(Miya);//Person {firstName: 'Miya', birthYear: 1999}
// //
// // //new演算子で関数を呼ぶだすと起こること↓
// // //1.空のオブジェクトを新規に作成します
// // //2.関数が呼び出され、この関数呼び出しの中で、thisキーワードがこの新しく作成されたオブジェクトに設定される
// // // this = 新しい空のオブジェクト
// // //3.新しく作成されたオブジェクトをプロトタイプにリンクさせる
// // //4.最初に作成したオブジェクトをコンストラクタ関数から自動的に返す
// // //　⇨しかしこの時点でオブジェクトは空である必要はないです
// //
// const Noel = new Person('Noel',1994);
// console.log(Noel);
// // //このようにして、同じコンストラクタ関数を使って色々とオブジェクトを作ることが可能
// console.log(Noel instanceof Person); //true
// // //これはbooleanでPersonのインスタンスか否かを示す
// //
// const Maria = 'Maria';
// console.log(Maria instanceof Person); //false
//
// // //Mariaはnew演算子でインスタンス化していないからfalseです
// //
// // //////////////////////////////////////////////////
// // //209.Prototypes 継承に似ている　
// // //JSの各関数は自動的にPrototypesというプロパティを持つようになる。
// // //これで、コンストラクタで定義した全てのメソッド、プロパティにアクセスできるようになります
// // //内部プロパティみたいなもの。
// // //このプロトタイプを使って、メソッドを実装するようにする
// //
// // console.log(Person.prototype);
// // //ここで{constructor: ƒ}　calcAgeメソッドのプロトタイプができていることがわかる
// //
// // Person.prototype.calcAge = function(){ //prototypeのスペル間違えないで
// //   console.log(2023 - this.birthYear);
// // };
// // //これで、コンストラクタ関数のPrototypesプロパティを設定します
// //
// // Miya.calcAge(); //24　　全てのメソッドにアクセスできますね？
// // //いつもいつも関数には()をつける！忘れない！
// // //このMiyaはコンストラクタ関数で作成されたものだから、それに追加された内部プロパティのcalcAge()にもアクセスできる！
// // Noel.calcAge(); //29
// //
// // //プロトタイプを設定する他のやり方。
// // Person.prototype.species = 'Homo Sapiens';
// // console.log(Miya);
// // console.log(Miya.species);//Homo Sapiens
// //
// // // calcAge()のケースも、speciesのケースもですが、プロトタイプは、bオブジェクトの中に直接あるわけではないです。それ自身のプロパティではないので。
// // //own propaties（自身のプロパティ）はオブジェクト自体に直接宣言さてるものだけ
// // //firstName = Miya　と
// // //birthYear = 1999　の2つのみ
// // //⏫これをチェックする方法がある
// // console.log(Miya.hasOwnProperty('firstName')); //true
// // console.log(Miya.hasOwnProperty('species')); //false
// //
// // ///////////////////////////////////////////
// // //211.Prototypal Inheritance on Built-In Objects
// // console.log(Person.prototype.constructor);
// // //⇨これで、上記に書いたPersonのコンストラクタを手に入れることができる
// // console.dir(Person.prototype.constructor);
// // //ƒ Person(firstName,birthYear) となる
// // //しかし、nameやprotptypeも見ることができます
// // //console.dirはp部ジェクトのプロパティを見ることができる
// // const arr = [3,2,1,2,4,5];
// //
// // Array.prototype.unique = function(){
// //   return [...new Set(this)] //Setは、重複する値は格納できない
// // };
// //
// // console.log(arr.unique()); //(5) [3, 2, 1, 4, 5]
// //
// // //DOMを確認してみよう
// // const h1 = document.querySelector('h1');
// // console.dir(h1);
//
// ////////////////////////////////////////////////
// //213.ES6 Classes
// //JSのクラスはjavaやC++のようには機能しません。
//
// //クラスの作り方の書き方は二つある。
// // //Class Ecpression
// // const PersonCl = class{}
//
// //クラス宣言
// // class PersonCl{
// //   //コンストラクタとメソッドを追加します
// //   constructor(fullName,birthYear){
// //     this.fullName = fullName;
// //     this.birthYear = birthYear;
// //   }
// //   //メソッドの書き方
// //   calcAge(){
// //     console.log(2023 - this.birthYear);
// //   }
// //   //実はこれはconstructor()の外側にあるよね？ということは、これはプロトタイプということです
// //
// //   ///実はクラスでもsetterとgetterを設定することができます
// //   get Age(){
// //     return 2023 - this.birthYear;
// //   }
// //
// //   //記載されている名前がスペースを含んだフルネームかを確認する
// //   set fullName(name){
// //     if (name.includes(' ')) this._fullName = name;
// //     else alert (`${name} is not a full name!`);
// //   }
// //
// //   get fullName(){
// //     return this._fullName;
// //   }
// // };
// //
// // //基本的にさっきとやり方は同じみたいね。
// // const Taylor = new PersonCl('Taylor Swift',1989);
// // console.log(Taylor);
// // //PersonCl {firstName: 'Taylor', birthYear: 1989}
// // Taylor.calcAge();
// // console.log(Taylor.Age); //結果は同じ
// // //get Ageの方はログをreturnで返してないから、ここでログに出す
// //
// // //さっきみたいにクラスの中に書いてもいいし、今までみたいに外部で手動でつけることもできるよ。
// // PersonCl.prototype.greet = function(){
// //   console.log(`Hey, ${this.firstName} is here!`);
// // }
// // Taylor.greet(); //Hey, Taylor is here!
//
// //////////////////////////////////////
// //214.Setters and Getters
// //全てのjsのオブジェクトは、setter とgetterのプロパティを持つことができる（javaみたい）
// //これらの特殊なプロパティを「アセッサープロパティ」といいます
//
// //以前やったBanist Appを例にやってみます
// // const account = {
// //   owner : 'Miya',
// //   movements : [200,530,1000,170,300],
// //
// // //etter とgetterをどちらも書かないといけないわけではない！どっちかだけでいいからね！
// //
// //   //getを先頭につける
// //   get latest(){
// //     return this.movements.slice(-1).pop();
// //   },
// //   //一番最後の動きをとる。sliceだけだと、配列で帰ってくるので、popで配列をなしにしている
// //
// //   set latest(mov){
// //     this.movements.push(mov);
// //   },
// //   //アカウントのmovementsに新しい値を入れる
// // };
// // console.log(account.latest); //300
// // //getを使っているので、普通のプロパティのように書いていい。()を書いてメソッドにしなくていい
// // account.latest = 50;
// // //これも、setterなので、()はいらない。メソッドだけど、書かなくていいんです
// // // console.log(account.movements);
//
// ///////////////////////////////////////////
// //▼▼▼▼▼▼▼▼▼▼▼▼▼座学▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// //206.What is Object-Oriented Programming?
// //通常OOPと呼ばれる
// //⇨オブジェクトという概念に基づいたプログラミングパラダイム
// //コードの書き方、まとめ方を意味する
// //オブジェクトには、
// //・プロパティ　= データ
// //・メソッド = コード　がある
// //オブジェクトを使うことで、全てのデータとそれに対応する振る舞いを、一つの大きなブロックにまとめている。
// //ではなぜこんなものが存在するのか
// //理由は、より柔軟で、保守しやすいものにすることを目的に開発されたからです。
// //以前は「スパゲティコード」と呼ばれる複雑なコードが多かったが、
// //OOPにより、大規模なプロジェクトも開発しやすくなった
// //もちろんOOPだけが、大規模なアプリ開発の方法ではない。
// //例えば関数型プログラミングは、スパゲティコードを避けるという意味では、同じ目標を達成することができます。
//
// //今まで
// //クラス⇨そのクラスで記述されたルールに基づいて新しいオブジェクトを作成できる。設計図。しかし、抽象的なルールだけで、実際に触れることができる具体的なものは何もない.クラスそのものはオブジェクトではない。
// //インスタンス：というんおがコードの中で実際に使えるオブジェクト(うわーjavaでやったな)抽象的な設計図から作成された、実際の家みたいな感じ。
// //かっこいいことは、このクラスを使って、アプリケーションで必要なだけのインスタンスを作成できるということ。一枚の設計図から、複数の家を建てることができるのと同じこと。
// //ではクラスからどのようにモデル化するのでしょうか
// //いいクラス実装のための指針となる4つの基本原則があります。
//
// //1.抽象化
// //どうでもいい部分を無視したり、隠したりすること.
// //これはOOPに限らず、全てのプログラミング全般において重要なこと
//
// //2.カプセル化
// //あるプロパティやメソッドをクラス内部で非公開にして、クラスの外からアクセスできないようにすること
// //もちろん、いくつかのメソッドは、APIと呼ぶ、公開IFとして公開することができる
// //これをやることで、メソッドの一部に依存している外部のコードを壊すことなく、コードを変更することが可能になる。
// //これでスパゲティコードを避けることができます。
//
// //3.継承
// //密接に関連する（似ている）2つのクラスがある場合、一方のクラスを、他方のクラスから継承させることができる.
// //子クラスは、親クラスから全てのプロパティとメソッドを受け継ぐ。
// //もちろん、子クラスは独自のメソッドや、プロパティを持つことができます。
//
// //4.ポリモーフィズム
// //「多くの形」という意味
// //(OOPの場合では)子クラスが親クラスから継承したメソッドを上書きできることを意味する。
//
// ///////////////////////////////////////////
// //207.OOP in JavaScript
// //JSでは少し違った動きをします。
// //JSには「プロトタイプ」というものがあり全てのオブジェクトは「プロトタイプオブジェクト」にリンクされている。
// //つまり、「プロトタイプオブジェクト」にはその「プロトタイプ」にリンクされちる全てのオブジェクトがアクセスして使用できるメソッドとプロパティが含まれている。
// //⇨これを「プロトタイプ継承」と呼ばれている。これはOOPの継承とは違います。
// //OOPの継承は、あるクラスが他のクラスを継承していた。
// //しかしJSの場合は、クラスを継承したインスタンスである
// //(これは善是違うことなので覚えてください)
// //端的に質問を予約すると
// //「どのようにJSでOOPを実装するのか」ということ
// //1.コンストラクタ関数：新しいオブジェクトのプロトタイプも設定する関数を使用し、プログラム的にオブジェクトを作成する方法。
// //配列、mapなどはこのように実装されています
// //2. ES6クラス モダンな方法です。しかし、誰でもOOPを実装しやすいように、しているだけで、中身は単純にコンストラクタ関数で実装されています。
// //3.Object.create()
// //基本的にオブジェクトをプロトタイプオブジェクトにリンクさせる、最も簡単な方法。しかし、他の2つの方法ほど使われていません。
//
// /////////////////////////////////////////////
// // Coding Challenge #1
// // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
// //
// // DATA CAR 1: 'BMW' going at 120 km/h
// // DATA CAR 2: 'Mercedes' going at 95 km/h


/////////////////////////////////////////////////
//215.Static Methods
//エラーが出たんで書き直した！

const Person = function(firstName,birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const miya = new Person('Miya',1999);
console.log(miya);

const noel = new Person('Noel',1994);
console.log(noel);

//新しくここで関数を作る
Person.hey =  function(){
  console.log('Hey there!');
  console.log(this);
  //これで確認したら一発だが、このthisはPersonコンストラクタの全てを表しているので、継承はされません。コンストラクタ全体を表している
};
//作った関数を呼び出すのは、実はこれだけでいい。
Person.hey();
//しかしこれだと警鐘はされません。
// miya.hey(); //これはできない

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
};

//Studentという新しい関数を作る。Personクラスに一つ引数を加えた
const Student = function(firstName,birthYear,course){
  //このfirstNameとbirthYearは親クラスにしたいPersonクラスとかぶっている
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this,firstName,birthYear);
  //このcalメソッドはfunctionが呼び出された時に、thisとして使用される値を自動的に設定
  this.course = course;
};

//プロトタイプ同士のリンク
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName}, and I study ${this.course}.`)
};

const mike = new Student('Mike',2020,'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);//true
console.log(mike instanceof Person);//true
//継承しているからどちらもtrueになります

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


class PersonCl {
  constructor(fullName,birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge(){
  console.log(2023 - this.birthYear);
  }

  greet(){
    console.log(`Hey ${this.fullName}`);
  }

  get age (){
    return 2023 -  this.birthYear;
  }

  set fullName(name){
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full Name!`);
  }

  get fullName(){
    return this._fullName;
  }

  //先ほど上のコンストラクタでやったことをクラスでやるとどうなるか
  //これは「staticメソッドは」という
  //staticメソッドはインスタンスを生成しなくてもクラスから直接呼び出すことのできるメソッド。
  //これはクラス単位のメソッドであるのでthisがありません
  static hey(){
    console.log('Hey there!');
    // console.log(this);
  };
};

PersonCl.hey();
//これで呼び出せます

//220.Inheritance Between "Classes": ES6 Classes
class StudentCl extends PersonCl{
  //ES&でクラス間の継承を実装するには、2つの材料が必要になります。
  //extendsキーワード、スーパー関数の二つ
  //extends は書くだけで、裏側でプロトタイプにリンクしてくれる
  constructor(fullName,birthYear,course){
    //fullnameとbirthyearはpersonClから引き継いでいる
    //必ずsuperを最初に書く必要があります.先に発火させないといけない
    super(fullName,birthYear)
    //extendsでは前みたいにPersonCl.call(this,)とかやらなくてsuperだけで完結する.引数に親クラスの引数を渡す
    //このsuperがサブクラスのthisを担う.
    this.course = course;
    //新しい引数だから、これは指定する
  }

  introduce(){
    console.log(`Hey! My name is ${this.fullName} and my major is ${this.course} !`);
  }
  //同じメソッドでも、子クラスからは上書きができる
  calcAge(){
    console.log(`I am ${2037 - this.birthYear} yo, but as a student I feel more like ${2037 - this.birthYear + 10} lol`);
  }
}

const martha = new StudentCl('Martha Jones',1999,'Religion');
console.log(martha);
martha.introduce(); //これで関数が呼び出される！
martha.calcAge(); // 24

////////////////////////////////////////////
//216.Object.create

//3つ目の考え。少しばかり、プロトタイプ継承の考えが残っている
//手動で値を設定することができ、任意の他のオブジェクトに設定することができる

//先ほど作ったpersonクラスのプロトタイプを作成
const PersonProto = {
  //ここで初期化の関数を設定しておく
  init(fistName,birthYear){
    this.fistName = fistName;
    this.birthYear = birthYear;
  },

  calcAge(){
    console.log(2023 - this.birthYear);
  },

};

const steven = Object.create(PersonProto);
console.log(steven);
//これがthis.みたいになっている
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

//221.Inheritance Between "Classes": Object.create
//これがobject.createを使った新しい子クラスの実装
const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
  //親クラスのinit()を再利用することができます
  PersonProto.init.call(this,firstName,birthYear);
  this.course = course;
};
StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName}, and I study ${this.course}.`)
};
const jay = Object.create(StudentProto);
//これでjayはstudentprotonの子クラスになった
//これは親プロトタイプからの継承であり、プロトタイプチェーンの環境にあることを意味する
jay.init('Jay',2010,'Europian History');
jay.introduce();
jay.calcAge()



//普通に考えて、コンストラクタ関数は、自動t系にインスタンスのプロトタイプがコンストラクタに設定される
console.log(steven.__proto__ === PersonProto); //true

const sarah = Object.create(PersonProto);
sarah.init('Taylor',1989); //上の初期化の関数をここで入れる
sarah.calcAge();//入れた年齢ともに、ここで計算する

///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class CarCl{
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
//
//   brake() {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
//
//   get speedUS(){
//     return this.speed / 1.6;
//   }
//
//   set speedUS(speed){
//     this.speed = speed * 1.6;
//   }
// };
//
// const ford = new CarCl('Ford',120);
// console.log(ford.speedUS); //75
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
//
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
//
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
//
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
//
// const EV = function(make,speed,charge){
//   Car.call(this,make,speed);
//   this.charge = charge;
// }
// //プロトタイプの継承
// EV.prototype = Object.create(Car.prototype);
//
// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo;
// }
// //この関数で、チャージされた後の充電量がchargeの相当量になる
// EV.prototype.accelerate = function(){
//   this.speed += 20;
//   this.charge--;
//   console.log(`${this.make} is going at ${this.speed} km/h,with a charge of ${this.charge}`);
// }
//
// const tesla = new EV('Tesra',120,23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
//
// //子クラスは親クラスから継承したメソッドを上書きすることができる。
// //それを表した例になります
