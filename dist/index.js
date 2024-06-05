"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MyTestClass_1 = __importDefault(require("./MyTestClass"));
const myInstance = new MyTestClass_1.default('test', 42);
myInstance.method1();
myInstance.method2();
console.log(myInstance.readOnlyProp);
try {
    // This should throw an error or fail silently because the property is read-only
    Object.defineProperty(myInstance, 'readOnlyProp', { value: 'New Value' });
}
catch (error) {
    console.error('Error setting read-only property:', error);
}
