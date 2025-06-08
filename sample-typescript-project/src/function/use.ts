// /function/components.ts を利用するファイル
import { getGreeting } from "./component";


const nameTaro = getGreeting("taro");
console.log("コンポーネント集: " + nameTaro);