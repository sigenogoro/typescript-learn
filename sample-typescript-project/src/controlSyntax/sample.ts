// 分岐処理

const score = 90;

if (score >= 80) {
    console.log("合格");
} else if(score >= 60) {
    console.log("及第点");
} else {
    console.log("再試験");
}

// 三項演算子

const isLogin = true;
const message = isLogin ? "ログイン中" : "未ログイン";

console.log(message);

// 繰り返し
for (let i = 0; i < 3; i++) {
    console.log(`繰り返し処理: ${i}`);
}

const namesList = ["Alice", "Bob", "Charlie"];

for (const name of namesList) {
    console.log(`名前: ${name}`)
}

const userObject = {
    name: "Alice",
    age: 25,
    isStudent: false
};

for (const key in userObject) {
    // keyof typeof userObject は userObject のキーの型を取得する
    // ただし、keyはstring型であるため、keyof typeof userObjectを使う必要がある
    // そのため、keyを keyof typeof userObject にキャストする
    console.log(`${key}: ${userObject[key as keyof typeof userObject]}`)
}