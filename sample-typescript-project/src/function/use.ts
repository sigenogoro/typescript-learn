// /function/components.ts を利用するファイル
import { getGreeting } from "./component.js";
import { arrowFunctionGreeting } from "./component.js";
// default export（波括弧不要・名前自由）
import dfgt from "./component.js"; 

const nameTaro = getGreeting("taro");
console.log("コンポーネント集: " + nameTaro);

const nameJiro = arrowFunctionGreeting("Jiro");
console.log(nameJiro);

const nameHanako = dfgt("Hanako");
console.log(nameHanako);
