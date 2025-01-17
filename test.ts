import Libvoikko from "./build/libvoikko.js";

const voikko = Libvoikko();
const instance = voikko.init("fi");

const result = instance.analyze("kissa");
console.log(result);
