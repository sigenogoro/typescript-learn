# typeScriptの学習サイト

## 環境構築方法(このリポジトリを git cloneした場合)
※ node, npm はインストール済み
1. `cd sample-typescript-project` に移動
2. `npm install`コマンドを実行する(package.json と package-lock.json に記載されている依存パッケージをインストールします。)
3. ts 拡張子ファイルがある /src 配下で `npx tsc`コマンドを実行(tsconfig.json が正しく設定されていれば、.ts ファイルがコンパイルされて、指定されたディレクトリに .js ファイルが生成される)
4. JSファイルがある /build 配下で `node ファイル名.js` コマンドで実行

## 自動ビルド方法
- `npx tsc --watch`