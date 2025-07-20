# TypeScript学習プロジェクト

## プロジェクト構成
- `sample-typescript-project/` - TypeScript学習用サンプルコード
- `typescript-text-rpg-oop/` - CLIテキストRPGプロジェクト

## 環境構築方法
※ Node.js, npm はインストール済み前提

### TypeScript学習プロジェクト (sample-typescript-project)
```bash
cd sample-typescript-project
npm install
```

### RPGプロジェクト (typescript-text-rpg-oop)
```bash
cd typescript-text-rpg-oop
npm install
```

## 起動コマンド集

### TypeScript学習プロジェクト (sample-typescript-project)
```bash
# 開発用ビルド（自動監視）
npm run dev
# または
npm run watch

# 本番ビルド
npm run build

# 個別実行
npm run run:array      # 配列の学習
npm run run:function   # 関数の学習
npm run run:interface  # インターフェースの学習
npm run run:type       # 型の学習
npm run run:practice   # 練習問題

# ビルドファイル削除
npm run clean
```

### RPGプロジェクト (typescript-text-rpg-oop)
```bash
# 開発用ビルド（自動監視）
npm run dev
# または
npm run watch

# 本番ビルド
npm run build

# ゲーム実行（ビルド後）
npm start

# ビルドファイル削除
npm run clean
```

## 手動実行方法
```bash
# TypeScriptコンパイル
npx tsc

# JavaScriptファイル実行
node build/ファイル名.js
```