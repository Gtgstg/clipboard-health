const { createContainer, asValue, asClass, InjectionMode, Lifetime } = require('awilix');

const crypto = require("crypto");

function getScope() {
    return { lifetime: Lifetime.SINGLETON };
}

const container = createContainer({ injectionMode: InjectionMode.CLASSIC });
container.register({
    "crypto": asValue(crypto, getScope()),
});

module.exports = container;