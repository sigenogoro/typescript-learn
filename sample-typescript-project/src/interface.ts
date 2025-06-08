// interfaceについて

// Userインターフェースの定義
interface User {
    name: string;
    age: number;
    // email: string | undefined;これと同じ意味となる
    // emailはundefinedを許容する形となり、値がない場合は undefinedとなる
    // null は許容しない
    email?: string // nullableなプロパティ
}

// 拡張
interface UserWithGender extends User {
    gender?: string;
}


function createUser(name: string, age: number, email?: string): User {
    // ---- ユーザ作成する処理 -----
    return {
        name: name,
        age: age,
        email: email
    }
}

// オブジェクトを引数にする方法
function createUser2(user: UserWithGender): UserWithGender {
    // ---- ユーザ作成する処理 -----
    return {
        name: user.name,
        age: user.age,
        gender: user.gender,
        email: user.email
    }
}

// オブジェクトの分割することもできる
// 名前付き引数にしたい場合に利用できる
// それ用のインターフェースを定義しないといけない
function createUser3({name, age, gender, email}: UserWithGender): User {
    // ---- ユーザ作成する処理 -----
    // ---- gender処理 -----
    return {
        name: name,
        age: age,
        email: email
    }
}
// 基本的に位置引数で定義となる
// JavaやKotlinのような名前付き引数はできない
const user1: User = createUser("Alice", 20);
console.log(user1);

const user2: UserWithGender = createUser2({
    name: "Bob",
    age: 25,
    gender: "main",
})
console.log(user2);

const user3: User = createUser3({
    name: "Charlie",
    age: 30,
    email: "hogehoge@example.com"
})

console.log(user3);