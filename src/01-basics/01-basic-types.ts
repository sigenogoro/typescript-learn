// --変数-- 
const name: string = "勇者";
const hp: number = 100;
console.log(name, hp);

// 型推論という形で使うことができる
const role = "主人公";

console.log(`${name}は${name}です！`);

// array, tuple, enum
const skill: readonly string[] = ["火炎放射", "ビンタ", "空手チョップ"]
const position: [number, number] = [100, 50];

console.log(`現在の場所は、X座標:${position[0]}, Y座標:${position[1]}`)

// enum Element {Fire, Ice, Thunder, Dark}

// const element = Element.Fire;
// // elementは「数値」である
// console.log(element);

// こっちの方が文字列で返答してくれる
enum Element {
  Fire = "Fire",
  Ice = "Ice",
  Thunder = "Thunder",
  Dark = "Dark"
}
console.log(Element.Fire);
// type とは型の別名である
// string | string の 「|」がユニオンという形である
// typeに何を格納するのを許すのかを出すことができる
type Job = "hero" | "wizard" | "warrior";

// テスト用にエクスポートする
export function add(a: number, b: number): number {
  return a + b;
}

