// 配列の問題集

// 次の配列に対して、すべての要素を2倍にした新しい配列を作ってください！
const practiceNumbers = [1, 2, 3, 4, 5];
console.log(practiceNumbers.map((n) => n * 2));


// 次の配列のすべての数値を合計した結果を、reduceを使って求めてください！
const practiceNumbers2 = [1, 2, 3, 4, 5];
// const total = practiceNumbers2.reduce((acc, current) => {
//     return acc + current;
// }, 0);
const total = practiceNumbers2.reduce((acc, current) => acc + current, 0);
console.log(total)

// 次のユーザー配列から、
// idをキー、nameをバリューとするオブジェクトをreduceで作成

// 作りたいオブジェクトのイメージ
// {
//   1: "田中",
//   2: "佐藤",
//   3: "鈴木"
// }

const practiveUsers = [
    { id: 1, name: "田中" },
    { id: 2, name: "佐藤" },
    { id: 3, name: "鈴木" }
];

const userMap = practiveUsers.reduce<Record<number, string>>((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});
// 出力 => { '1': '田中', '2': '佐藤', '3': '鈴木' } 
// key は number型であるが、
// JavaScriptのオブジェクトはkeyを strin型で持っているため、
// number型のkeyはstring型に変換されてしまう
console.log(userMap["1"]);
