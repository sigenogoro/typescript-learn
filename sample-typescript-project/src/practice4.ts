// 型定義の色々
 
// any型
// any型はどんな型でも代入できる
// ただし、型安全ではないので注意が必要
const anyValue: any = 123;
let anyString: any = "Hello, TypeScript!";
anyString = 456; // any型なのでどんな型でも入ってしまう

// unknown型
// unknown型はどんな型でも代入できる
// ただし、型安全が保たれる
// kotlinでの nullable型と同じようなイメージ
const unknowValue: unknown = "Hello, TypeScript!";
// console.log(unknowValue.toUpperCase())

// 型安全を保つために、型アサーションを利用するとよい
const unknowValue2: unknown = "Hello, TypeScript!";
if(typeof unknowValue2 === "string") {
    console.log(unknowValue2.toUpperCase());
}

// never型
// 決して値を返さない関数
function throwError(message: string): never {
    throw new Error(message)
}

// void型
function logMessaege(message: string): void {
    console.log(message);
}
logMessaege("Log meesage!");

// 配列型
let scores: number[] = [90, 80, 20];
let names: Array<string> = ["Alice", "Bob", "Charelie"];
console.log(scores);
console.log(names);
// タプル型
let tuple: [number, string] = [1, "Alice"];
console.log(tuple);
// tuple[0] = "Bob"; // エラー内容: Type 'string' is not assignable to type 'number'.

// オブジェクト型
let sampleUser: {name: string, age: number} = {
    name: "Alice",
    age: 17
};

enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Blue;
console.log(color); // enum の値は数値で出力される

// null と undefined
// null を代入できる
let nullableValue: null = null;
// 何も入っていない場合、undefined が代入される
let undefinedValue;
console.log(undefinedValue);

// ユニオン型
let value: string | number;
value = "Hello, String!";
value = 123; // number型も入れることができる
// value = true　boolean型は入れることができない

// 型ガード
// 型ガードを利用することで型の絞り込みができる
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String value: " + value);
    } else if (typeof value === "number") {
        console.log("Number value: " + value);
    }
}
processValue("hogehoge");
processValue(123);

// リテラル型
// リテラル型は特定の値を持つ型

let direction: "left" | "right" | "up" | "down";
direction = "left";
// direction = "back"; // 特定の値以外はエラーとなる

