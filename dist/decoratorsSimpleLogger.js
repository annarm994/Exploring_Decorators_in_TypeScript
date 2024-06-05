"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SimpleLogger(constructor) {
    return class extends constructor {
        constructor(...args) {
            console.log(`Creating instance of ${constructor.name} with args: ${args}`);
            super(...args);
        }
    };
}
exports.default = SimpleLogger;
