"use strict";
const AutoBind = (_, _2, descriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            return originalMethod.bind(this);
        },
    };
    return adjDescriptor;
};
//# sourceMappingURL=autobind.js.map