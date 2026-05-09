# 05 - 高度な型

TypeScript の型システムを深く使いこなすための機能を学ぶ。

## 学習内容

- **Utility Types** — 標準ライブラリが提供する型変換ユーティリティ
  - `Partial<T>` — 全プロパティを省略可能にする
  - `Required<T>` — 全プロパティを必須にする
  - `Readonly<T>` — 全プロパティを読み取り専用にする
  - `Pick<T, K>` — 一部のプロパティだけ取り出す
  - `Omit<T, K>` — 一部のプロパティを除外する
  - `Record<K, V>` — キーと値の型を指定したオブジェクト型
  - `Exclude<T, U>` / `Extract<T, U>` — ユニオン型を絞り込む
- **条件型（Conditional Types）** — `T extends U ? A : B`
- **マップ型（Mapped Types）** — 既存の型を変換して新しい型を作る
- **Template Literal Types** — 文字列リテラルを組み合わせた型

## 学習のポイント

- Utility Types は NestJS の DTO 定義でよく使う（例: `Partial<CreateUserDto>`）
- 条件型とマップ型を組み合わせることで、複雑な型変換も型安全に表現できる
- `infer` キーワードで条件型の中から型を取り出せる
