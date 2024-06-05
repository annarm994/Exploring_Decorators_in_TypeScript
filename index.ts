import MyTestClass from './MyTestClass';

const myInstance = new MyTestClass('test', 42);
myInstance.method1();
myInstance.method2();

console.log(myInstance.readOnlyProp);
try {
    // This should throw an error or fail silently because the property is read-only
    Object.defineProperty(myInstance, 'readOnlyProp', { value: 'New Value' });
} catch (error) {
    console.error('Error setting read-only property:', error);
}