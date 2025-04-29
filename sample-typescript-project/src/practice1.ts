// 変数編・型編
// let: 再代入可能な変数として宣言される
let userName: string = "John Doe";
let studyHours: number = 5;
let isReady: boolean = true;

// const: で宣言することで定数化される
// 開発時、基本的にはこちらを推奨している
const PI: number = 3.14;

// 型推論があるため、明示的に型を宣言しなくて良い
const MAX_USERS = 100;

console.log(`名前: ${userName}`);
console.log(`勉強時間: ${studyHours} 時間`);
console.log(`準備完了？ ${isReady}`);