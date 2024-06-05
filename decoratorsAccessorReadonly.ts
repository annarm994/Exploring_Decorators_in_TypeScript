function MyReadonly(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    if (descriptor.get || descriptor.set) {
        descriptor.set = undefined;
    } else {
        descriptor.writable = false;
    }
    return descriptor;
}

export default MyReadonly;