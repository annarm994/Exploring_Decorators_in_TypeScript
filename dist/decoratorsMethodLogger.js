"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method ${propertyKey} called with args: ${args}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
exports.default = LogMethod;
