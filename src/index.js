// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return propertyName; };

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        get: function() { return propertyName },
        set: function(value) { return propertyName = value },
        enumerable: false
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    var magicObj = () => {};
    magicObj.prototype = magicObj.__proto__;
    return magicObj;
};

Function.prototype.valueOf = () => sync;
var sync = 0;
const incrementor = () => {
    sync += 1;
    return incrementor;
};

var async = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        resolve (async += 1);
    });
};

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};

const sortByProto = (array) => {
    array.sort(function(a, b) {
        return a.__proto__ - b.__proto__;
    });
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;