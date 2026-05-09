// ── 基本型 ──────────────────────────────────────────────────────
const playerName: string = "勇者";
const hp: number = 100;
const isAlive: boolean = true;

// 配列（2通りの書き方、どちらでも同じ意味）
const items: string[] = ["ポーション", "エリクサー"];
const scores: Array<number> = [10, 20, 30];

// タプル — 要素数と各要素の型が固定
const player: [string, number] = ["勇者", 100, "モンスター"];

// enum — 名前付き定数の集合
enum Direction {
  North,
  South,
  East,
  West,
}

// any — 型チェックを無効化（なるべく使わない）
let anything: any = 42;
anything = "文字列にもなれる";

// unknown — any より安全。使う前に型チェックが必要
let unknownValue: unknown = "不明な値";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

// null / undefined
let nullable: string | null = null;
let optional: string | undefined = undefined;

// ── 出力 ─────────────────────────────────────────────────────────
console.log("=== 基本型 ===");
console.log(`名前: ${playerName}, HP: ${hp}, 生存: ${isAlive}`);
console.log(`アイテム: ${items.join(", ")}`);
console.log(`スコア: ${scores.join(", ")}`);
console.log(`プレイヤー: ${player[0]}, HP: ${player[1]}`);
console.log(`方向（enum）: ${Direction[Direction.North]}`);
console.log(`nullable: ${nullable}, optional: ${optional}`);
