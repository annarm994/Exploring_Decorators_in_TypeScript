function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method ${propertyKey} called with args: ${args}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

export default LogMethod;