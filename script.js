'use strict';


///////////////////////////////////////////////
//208.Constructor Functions and the new Operator
//コンストラクタ関数を使っていきましょう。
//コンストラクタ関数と言っても、全然普通の関数です、
//唯一の違うことは、new演算子でコンストラクタ関数を呼び出すことです

//「人」で例を作ってみましょう
//なお、コンストラクタ関数は、常に大文字で始まるというルールがあります
const Person = function(firstName,birthYear){
  // console.log(this); //これだとPerson {}と表示される
  //>>>>>>>>プロパティ
  this.firstName = firstName;
  //ここでは、thisキーワードが、空のオブジェクトを意味する
  this.birthYear = birthYear;
  //返されたオブジェクトが、私たちがここで作ろうとしているオブジェクトになります
  //引数のパラメータを受け取って、そのプロパティを設定するように記入する
  //今回は引数とプロパティを同じ名前にしましたが、別に必ず同じ名前でなくてはいけないということではない
  //引数は、「インスタンスプロパティ」にもなりえるのわかりますか？だってpersonのインスタンスでやりますので、インスタンスプロパティになりますよね。
  //だって、インスタンス化すれば、この引数を利用できるわけになります
  //>>>>>>>>関数
  //このようにしてメソッドを書くことはできます、、、が、コンストラクタ関数の中でメソッドは絶対に作成しないでください
  //理由は、このコンストラクタ関数を使って、信じられない数の人のオブジェクトを作るとなると全てのインスタンス化されたオブジェクトがこの関数を持ち運ぶことになる
  //そうすると、この関数のコピーを信じられない数分作ることになるので、コードパフォーマンスに影響が出ます
  // this.calcAge = function(){
  //   console.log(2023 - this.birthYear);
  // }
};
//new演算子で関数を呼び出します。インスタンス化
const Miya = new Person('Miya',1999);
//それを新しく作った変数にnew演算子で関数を呼び出したものを格納する
console.log(Miya);//Person {firstName: 'Miya', birthYear: 1999}

//new演算子で関数を呼ぶだすと起こること↓
//1.空のオブジェクトを新規に作成します
//2.関数が呼び出され、この関数呼び出しの中で、thisキーワードがこの新しく作成されたオブジェクトに設定される
// this = 新しい空のオブジェクト
//3.新しく作成されたオブジェクトをプロトタイプにリンクさせる
//4.最初に作成したオブジェクトをコンストラクタ関数から自動的に返す
//　⇨しかしこの時点でオブジェクトは空である必要はないです

const Noel = new Person('Noel',1994);
console.log(Noel);
//このようにして、同じコンストラクタ関数を使って色々とオブジェクトを作ることが可能
console.log(Noel instanceof Person); //true
//これはbooleanでPersonのインスタンスか否かを示す

const Maria = 'Maria';
console.log(Maria instanceof Person); //false
//Mariaはnew演算子でインスタンス化していないからfalseです

//////////////////////////////////////////////////
//209.Prototypes 継承に似ている　
//JSの各関数は自動的にPrototypesというプロパティを持つようになる。
//これで、コンストラクタで定義した全てのメソッド、プロパティにアクセスできるようになります
//内部プロパティみたいなもの。
//このプロトタイプを使って、メソッドを実装するようにする

console.log(Person.prototype);
//ここで{constructor: ƒ}　calcAgeメソッドのプロトタイプができていることがわかる

Person.prototype.calcAge = function(){ //prototypeのスペル間違えないで
  console.log(2023 - this.birthYear);
};
//これで、コンストラクタ関数のPrototypesプロパティを設定します

Miya.calcAge(); //24　　全てのメソッドにアクセスできますね？
//いつもいつも関数には()をつける！忘れない！
//このMiyaはコンストラクタ関数で作成されたものだから、それに追加された内部プロパティのcalcAge()にもアクセスできる！
Noel.calcAge(); //29

//プロトタイプを設定する他のやり方。
Person.prototype.species = 'Homo Sapiens';
console.log(Miya);
console.log(Miya.species);//Homo Sapiens

// calcAge()のケースも、speciesのケースもですが、プロトタイプは、bオブジェクトの中に直接あるわけではないです。それ自身のプロパティではないので。
//own propaties（自身のプロパティ）はオブジェクト自体に直接宣言さてるものだけ
//firstName = Miya　と
//birthYear = 1999　の2つのみ
//⏫これをチェックする方法がある
console.log(Miya.hasOwnProperty('firstName')); //true
console.log(Miya.hasOwnProperty('species')); //false

///////////////////////////////////////////
//211.Prototypal Inheritance on Built-In Objects
console.log(Person.prototype.constructor);
//⇨これで、上記に書いたPersonのコンストラクタを手に入れることができる
console.dir(Person.prototype.constructor);
//ƒ Person(firstName,birthYear) となる
//しかし、nameやprotptypeも見ることができます
//console.dirはp部ジェクトのプロパティを見ることができる
const arr = [3,2,1,2,4,5];

Array.prototype.unique = function(){
  return [...new Set(this)] //Setは、重複する値は格納できない
};

console.log(arr.unique()); //(5) [3, 2, 1, 4, 5]

//DOMを確認してみよう
const h1 = document.querySelector('h1');
console.dir(h1);


///////////////////////////////////////////
//▼▼▼▼▼▼▼▼▼▼▼▼▼座学▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
//206.What is Object-Oriented Programming?
//通常OOPと呼ばれる
//⇨オブジェクトという概念に基づいたプログラミングパラダイム
//コードの書き方、まとめ方を意味する
//オブジェクトには、
//・プロパティ　= データ
//・メソッド = コード　がある
//オブジェクトを使うことで、全てのデータとそれに対応する振る舞いを、一つの大きなブロックにまとめている。
//ではなぜこんなものが存在するのか
//理由は、より柔軟で、保守しやすいものにすることを目的に開発されたからです。
//以前は「スパゲティコード」と呼ばれる複雑なコードが多かったが、
//OOPにより、大規模なプロジェクトも開発しやすくなった
//もちろんOOPだけが、大規模なアプリ開発の方法ではない。
//例えば関数型プログラミングは、スパゲティコードを避けるという意味では、同じ目標を達成することができます。

//今まで
//クラス⇨そのクラスで記述されたルールに基づいて新しいオブジェクトを作成できる。設計図。しかし、抽象的なルールだけで、実際に触れることができる具体的なものは何もない.クラスそのものはオブジェクトではない。
//インスタンス：というんおがコードの中で実際に使えるオブジェクト(うわーjavaでやったな)抽象的な設計図から作成された、実際の家みたいな感じ。
//かっこいいことは、このクラスを使って、アプリケーションで必要なだけのインスタンスを作成できるということ。一枚の設計図から、複数の家を建てることができるのと同じこと。
//ではクラスからどのようにモデル化するのでしょうか
//いいクラス実装のための指針となる4つの基本原則があります。

//1.抽象化
//どうでもいい部分を無視したり、隠したりすること.
//これはOOPに限らず、全てのプログラミング全般において重要なこと

//2.カプセル化
//あるプロパティやメソッドをクラス内部で非公開にして、クラスの外からアクセスできないようにすること
//もちろん、いくつかのメソッドは、APIと呼ぶ、公開IFとして公開することができる
//これをやることで、メソッドの一部に依存している外部のコードを壊すことなく、コードを変更することが可能になる。
//これでスパゲティコードを避けることができます。

//3.継承
//密接に関連する（似ている）2つのクラスがある場合、一方のクラスを、他方のクラスから継承させることができる.
//子クラスは、親クラスから全てのプロパティとメソッドを受け継ぐ。
//もちろん、子クラスは独自のメソッドや、プロパティを持つことができます。

//4.ポリモーフィズム
//「多くの形」という意味
//(OOPの場合では)子クラスが親クラスから継承したメソッドを上書きできることを意味する。

///////////////////////////////////////////
//207.OOP in JavaScript
//JSでは少し違った動きをします。
//JSには「プロトタイプ」というものがあり全てのオブジェクトは「プロトタイプオブジェクト」にリンクされている。
//つまり、「プロトタイプオブジェクト」にはその「プロトタイプ」にリンクされちる全てのオブジェクトがアクセスして使用できるメソッドとプロパティが含まれている。
//⇨これを「プロトタイプ継承」と呼ばれている。これはOOPの継承とは違います。
//OOPの継承は、あるクラスが他のクラスを継承していた。
//しかしJSの場合は、クラスを継承したインスタンスである
//(これは善是違うことなので覚えてください)
//端的に質問を予約すると
//「どのようにJSでOOPを実装するのか」ということ
//1.コンストラクタ関数：新しいオブジェクトのプロトタイプも設定する関数を使用し、プログラム的にオブジェクトを作成する方法。
//配列、mapなどはこのように実装されています
//2. ES6クラス モダンな方法です。しかし、誰でもOOPを実装しやすいように、しているだけで、中身は単純にコンストラクタ関数で実装されています。
//3.Object.create()
//基本的にオブジェクトをプロトタイプオブジェクトにリンクさせる、最も簡単な方法。しかし、他の2つの方法ほど使われていません。

//////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function(make,speed){
  this.make = make;
  this.speed = speed;
};
// Person.prototype.calcAge = function(){ //prototypeのスペル間違えないで
//   console.log(2023 - this.birthYear);
// };

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW',120);
const mercedes = new Car('Mercedes',95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
