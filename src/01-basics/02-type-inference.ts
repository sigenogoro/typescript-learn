// ── 型推論 ───────────────────────────────────────────────────────
// TypeScript は右辺から型を推論できる（型注釈を省略できる場合が多い）

const level = 1;            // number と推論
const name = "勇者";        // string と推論
const isAlive = true;       // boolean と推論

// 配列の推論
const skills = ["ファイア", "サンダー"]; // string[] と推論

// 関数 — 引数は推論できないので型注釈が必要、戻り値は推論される
function double(n: number) {
  return n * 2; // 戻り値: number と推論
}

function greet(playerName: string) {
  return `こんにちは、${playerName}！`; // 戻り値: string と推論
}

// オブジェクトの推論
const enemy = {
  name: "スライム",
  hp: 30,
  attack: 5,
};
// 推論結果: { name: string; hp: number; attack: number }

// const と let の違い
const MAX_HP = 100;  // リテラル型 100 と推論（再代入不可）
let currentHp = 100; // number と推論（再代入可能）
currentHp -= 20;

// ── 出力 ─────────────────────────────────────────────────────────
console.log("=== 型推論 ===");
console.log(`レベル: ${level}, 名前: ${name}, 生存: ${isAlive}`);
console.log(`スキル: ${skills.join(", ")}`);
console.log(`double(5) = ${double(5)}`);
console.log(greet(name));
console.log(`敵: ${enemy.name} (HP: ${enemy.hp}, 攻撃: ${enemy.attack})`);
console.log(`MAX_HP: ${MAX_HP}, 現在HP: ${currentHp}`);
