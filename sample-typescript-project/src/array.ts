// 配列の色々

const numbers = [1,2,3,4,5];
// 型定義をしない場合はなんでも入れることができてしまう
const values = [1, "hello", true, null, undefined];

// ジェネリック型配列
// 配列の要素に型指定をすることができる
const genericArray: Array<number> = [1,2,3,4,5];
const genericArray2: number[] = [1,2,3,4,5];
const genericArrayValues: Array<Boolean> = [true, false];

// ユニオン配列
// 許す型を指定することができる
const data: (number | string)[] = [1, "two", 3, "four"];
const data2: Array<number | string> = ["two", 1, 3, "four"]

// 配列内にオブジェクト型を持つ

const users: {name: string, age: number}[] = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 25},
    {name: "Charlie", age: 30}
];

// 多次元配列
const matrix: number[][] = [
    [1,2,3],
    [4,5,6]
]

// 不変配列
const readonlyArray: ReadonlyArray<number> = [1,2,3,4,5];
// readonlyArray[0] = 10; 不変であるため変更できない

// 不変配列の作り方色々

// as const を利用したリテラル型ユニオン
const readonlyColors = ["red", "green", "blue"] as const;
console.log(readonlyColors[0]);
// readonlyColors[0] = "yellow"; // エラー内容: Cannot assign to '0' because it is a read-only property 読み取り専用プロパティであるため、'0' に代入することはできません。
console.log(readonlyColors);

// map/filter/reduceを使った配列の操作

// map
const numbers2 = [1,2,3,4,5];
const doubledNumbers = numbers2.map((number) => number * 2);
console.log(doubledNumbers);

// filter
const numbers3 = [1,2,3,4,5];
const evenNumbers3 = numbers3.filter((n) => n % 2 === 0);
console.log(evenNumbers3);
// reduce

// const result = array.reduce((累積値, 現在の要素) => {
//   return 更新後の累積値;
// }, 初期値);
const numbers4 = [1, 2, 3, 4, 5];
const sum = numbers4.reduce((accumulator, cuurentValue) => {
    return accumulator + cuurentValue;
}, 0);
console.log(sum);


const map = new Map<number, string>();
map.set(1, "Alice");
map.set(2, "Bob");