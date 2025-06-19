// interface と type の違い

interface User {
    name: string;
    age: number
}

type UserType = {
    name: string;
    age: number
}

// 拡張方法

interface AdminUser extends User {
    role: string;
}

type AdminUserType = UserType & {
    role: string;
}

// tyoeでしかできないこと

type Status = "active" | "success" | "error";

type ID = string | number;

// 関数型
type Calculator = (a: number, b: number) => number;
const addFunction: Calculator = (a, b) => a + b;
console.log(addFunction(1, 2));

// 関数の引数として利用
function calculate(operation:Calculator, x: number, y: number): number {
    return operation(x, y);
}
console.log(calculate(addFunction, 3, 4));
