"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decoratorsAccessorReadonly_1 = __importDefault(require("./decoratorsAccessorReadonly"));
const decoratorsMethodLogger_1 = __importDefault(require("./decoratorsMethodLogger"));
const decoratorsSimpleLogger_1 = __importDefault(require("./decoratorsSimpleLogger"));
let MyTestClass = class MyTestClass {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    method1() {
        console.log('Method1 called');
    }
    method2() {
        console.log('Method2 called');
    }
    get readOnlyProp() {
        return 'This is read-only';
    }
};
__decorate([
    decoratorsMethodLogger_1.default,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyTestClass.prototype, "method1", null);
__decorate([
    decoratorsAccessorReadonly_1.default,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MyTestClass.prototype, "readOnlyProp", null);
MyTestClass = __decorate([
    decoratorsSimpleLogger_1.default,
    __metadata("design:paramtypes", [String, Number])
], MyTestClass);
exports.default = MyTestClass;
