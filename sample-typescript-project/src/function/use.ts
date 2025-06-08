// /function/components.ts を利用するファイル
import { getGreeting } from "./component";
// import { arrowFunctionGreeting } from "./component";

const nameTaro = getGreeting("taro");
console.log("コンポーネント集: " + nameTaro);

// const nameJiro = arrowFunctionGreeting("Jiro");
// console.log(nameJiro);
