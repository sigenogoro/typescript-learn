// 関数編
// 関数の引数・戻り型には必ず、型を指定すること。

function add(a: number, b: number): number {
    return a + b;
}

const result = add(5, 3);
console.log(`5 + 3 = ${result}`);
const anotherResult = add(10, 20);
console.log(`10 + 20 = ${anotherResult}`);