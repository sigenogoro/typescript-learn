// 基本的な書き方
function hello(name: string): string {
    return `Hello, ${name}!`;
}
console.log(hello("World"));

// アロー関数
const sample = (name: string): string => {
    return `Hello, ${name}!`;
}
console.log("アロー関数: " + sample("taro"));

// アロー関数の省略形
const totalSum = (x: number, y: number) => x + y;
console.log("合計: " + totalSum(10, 20));

// 関数の引数にデフォルト値を設定
function greetDefault(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}
console.log(greetDefault()); // 引数なしで呼び出し

// 型エイリアスを利用した関数型の定義
type GreetFunction = (name: string) => string;
const greetFunction: GreetFunction = (name) => `Hello, ${name}!`;
console.log(greetFunction("Alice"));