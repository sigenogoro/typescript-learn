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
