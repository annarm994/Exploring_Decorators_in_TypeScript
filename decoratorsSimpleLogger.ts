function SimpleLogger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            console.log(`Creating instance of ${constructor.name} with args: ${args}`);
            super(...args);
        }
    };
}

export default SimpleLogger;