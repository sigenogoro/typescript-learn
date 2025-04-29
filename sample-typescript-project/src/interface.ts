// interface と type の違い

interface User {
    id: number;
    name: string;
    isActive: boolean;
    email?: string; // ?をつけることでオプショナルなプロパティになる。kotlin の nullable と同じようなイメージ
}

// email プロパティは入れなくてもよい
const user: User = {
    id: 1,
    name: "Johen Doe",
    isActive: true
};

interface User2 {
    readonly id: number; // readonly をつけることで変更できないプロパティになる
    name: string
}

const user2: User2 = {
    id: 1,
    name: "Johen Doe"
};

// user2.id = 2; // エラー内容: Cannot assign to 'id' because it is a read-only property 読み取り専用プロパティであるため、'id' に代入することはできません。

// 関数の型を定義するやり方。
// Kotlinの場合、こちらの方が基本形
interface Greet {
    (name: string): string;
}

const greet: Greet = (name) => {
    return "Good morning, " + name;
}

console.log(greet("TypeScript"));
