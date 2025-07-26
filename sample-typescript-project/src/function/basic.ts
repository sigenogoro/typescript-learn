// 関数の書き方集

// 通常関数
export function normalFunction(param: string): string {
    return `Hello, ${param}`;
}
// アロー関数
export const arrowFunctionGreeting = (x: number) => {
    return x * 2;
}
// アロー関数(省略形)
export const shortArrow = (x: number) => x * 2;

// テスト用関数
export function add(a: number, b: number): number {
    return a + b;
}

const executors = [
    () => {
        console.log("通常関数: ", normalFunction("World"));
        console.log("--------------------");
    },
    () => {
        console.log("アロー関数: ", arrowFunctionGreeting(10));
        console.log("--------------------");
    },
    () => {
        console.log("省略形: ", shortArrow(5));
        console.log("--------------------");
    }
]