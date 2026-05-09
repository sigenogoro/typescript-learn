# TypeScript 学習プロジェクト

NestJS 互換の TypeScript 環境で、基礎から CLI RPG 作成まで段階的に学習するリポジトリ。

## セットアップ

```bash
npm install
```

## コマンド

| コマンド | 説明 |
|---|---|
| `npm run dev` | `src/index.ts` を直接実行 |
| `npm run build` | `dist/` へコンパイル |
| `npm test` | ウォッチモードでテスト実行 |
| `npm run test:run` | テストを1回だけ実行（CI用） |

## 学習パス

```
src/
  01-basics/      基本型・型推論・ユニオン型・インターセクション型
  02-functions/   関数の型付け・オプショナル引数・オーバーロード
  03-classes/     クラス・インターフェース・継承・抽象クラス
  04-generics/    ジェネリクス・制約・ジェネリッククラス
  05-advanced/    Utility Types・条件型・マップ型
  06-rpg/         CLI RPG（学習の集大成）
```

## 技術スタック

- **TypeScript** 5.8 — `strict: true` で厳格な型チェック
- **tsx** 4 — TypeScript ファイルを直接実行
- **Vitest** 3 — テストランナー
- **inquirer** 8 — CLI RPG のインタラクティブ入力
- **reflect-metadata** — NestJS 移行時のデコレータ対応
