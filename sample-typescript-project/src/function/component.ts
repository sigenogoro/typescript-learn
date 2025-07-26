// コンポーネント集(他ファイルで再利用できる関数集)
// export function 他のファイルで利用できるようにするための関数
export function getGreeting(name: string): string {
    return name ? name : "Guest";
}

// アロー関数のエクスポート
export const arrowFunctionGreeting = (name: string): string => name;

// デフォルトエクスポート
// 複数のデフォルトエクスポートは定義できない
export default function defaultGreeting(name: string): string {
    return name;
}

// デフォルトエクスポートは、匿名にすることができる
// export default function (name: string): string {
//     return name;
// };