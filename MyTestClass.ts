import MyReadonly from './decoratorsAccessorReadonly';
import LogMethod from './decoratorsMethodLogger';
import SimpleLogger from './decoratorsSimpleLogger';

@SimpleLogger
class MyTestClass {
    constructor(public prop1: string, public prop2: number) {}

    @LogMethod
    method1() {
        console.log('Method1 called');
    }

    method2() {
        console.log('Method2 called');
    }

    @MyReadonly
    get readOnlyProp() {
        return 'This is read-only';
    }
}

export default MyTestClass;