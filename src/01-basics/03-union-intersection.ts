// ── ユニオン型（A | B）────────────────────────────────────────────
// どちらかの型を受け付ける

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  if (typeof id === "string") {
    console.log(`ID（文字列）: ${id.toUpperCase()}`);
  } else {
    console.log(`ID（数値）: ${id}`);
  }
}

// ── リテラルユニオン型 ───────────────────────────────────────────
// 特定の値のみ許容する

type Direction = "north" | "south" | "east" | "west";
type JobClass = "warrior" | "mage" | "rogue";

function move(direction: Direction) {
  console.log(`${direction} に移動`);
}

function describeJob(job: JobClass) {
  const descriptions: Record<JobClass, string> = {
    warrior: "高い防御力と近接攻撃",
    mage: "強力な魔法と低い防御力",
    rogue: "高い素早さと奇襲攻撃",
  };
  console.log(`${job}: ${descriptions[job]}`);
}

// ── インターセクション型（A & B）─────────────────────────────────
// 両方の型のプロパティをすべて持つ

type HasName = { name: string };
type HasHp = { hp: number };
type HasAttack = { attack: number };

type Character = HasName & HasHp & HasAttack;

const hero: Character = {
  name: "勇者",
  hp: 100,
  attack: 25,
};

// ── 出力 ─────────────────────────────────────────────────────────
console.log("=== ユニオン型・インターセクション型 ===");
printId("player-001");
printId(42);

move("north");

describeJob("warrior");
describeJob("mage");

console.log(`キャラクター: ${hero.name} (HP: ${hero.hp}, 攻撃: ${hero.attack})`);
