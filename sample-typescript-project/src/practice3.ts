let courseName: string = "TypeScript基礎";
let lessonCount: number = 10;
let isCompleted: boolean = false;

console.log(`コース名: ${courseName}`);
console.log(`レッスン数: ${lessonCount}`);
console.log(`完了フラグ: ${isCompleted}`);

console.log("\n--- 型エラーを発生させる試み ---");

// 文字列(string)型の変数に、数値(number)を代入しようとする
// courseName = 123; // エラー内容: Type 'number' is not assignable to type 'string'

// 数値(number)型の変数に、真偽値(boolean)を代入しようとする
// lessonCount = true; // エラー内容: Type 'boolean' is not assignable to type 'number'

// 真偽値(boolean)型の変数に、文字列(string)を代入しようとする
// isCompleted = "完了！"; // エラー内容: Type 'string' is not assignable to type 'boolean'

function addSample(a: number, b: number): number {
    return a + b;
}
  
console.log("\n--- 関数呼び出しで型エラーを発生させる試み ---");
  
// 数値(number)を期待する引数に、文字列(string)を渡してみる
let resultWithError = addSample(5, 5); // エラー内容: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(resultWithError);