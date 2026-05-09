# 01 - TypeScript の基本型

TypeScript の型システムの基礎を学ぶ。

## 学習内容

- **基本型** — `string` / `number` / `boolean` / `array` / `tuple` / `enum`
- **型推論** — TypeScript が自動で型を決める仕組み
- **ユニオン型** — `string | number` のように複数の型を許容する
- **インターセクション型** — 複数の型を合成する（`A & B`）

## ファイル一覧

| ファイル | 内容 |
|---|---|
| `01-basic-types.ts` | 基本型の宣言と使い方 |
| `02-type-inference.ts` | 型推論のルールと `const` / `let` の違い |
| `03-union-intersection.ts` | ユニオン型・インターセクション型・リテラル型 |

## 実行方法

```bash
npm run basics:1   # 01-basic-types.ts
npm run basics:2   # 02-type-inference.ts
npm run basics:3   # 03-union-intersection.ts
```

## 学習のポイント

- `any` は型チェックを無効化するため、なるべく使わない
- `unknown` は `any` より安全（使う前に型チェックが必要）
- `const` で宣言した変数はリテラル型に推論される
- ユニオン型とリテラル型の組み合わせで、取りうる値を絞り込める
