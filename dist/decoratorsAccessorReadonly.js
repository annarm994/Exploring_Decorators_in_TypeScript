"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MyReadonly(target, propertyKey, descriptor) {
    if (descriptor.get || descriptor.set) {
        descriptor.set = undefined;
    }
    else {
        descriptor.writable = false;
    }
    return descriptor;
}
exports.default = MyReadonly;
