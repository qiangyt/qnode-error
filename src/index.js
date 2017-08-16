/* eslint global-require: 'off' */

const SRC = '../src';

module.exports = {
    BaseError: require(`${SRC}/BaseError`),
    Errors: require(`${SRC}/Errors`),
    InternalError: require(`${SRC}/InternalError`),
    MissingParamError: require(`${SRC}/MissingParamError`),
    RequestError: require(`${SRC}/RequestError`)
};