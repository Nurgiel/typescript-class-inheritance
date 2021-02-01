var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _amount;
class MoneyExchanger {
    constructor(theAmount) {
        this.theAmount = theAmount;
        _amount.set(this, void 0); // ECMAScript Private Fields can’t be accessed or even detected outside of the containing class (hard privacy)
        this.rate = 6.16;
        __classPrivateFieldSet(this, _amount, theAmount);
    }
    getAmountAfterExchange() {
        return (__classPrivateFieldGet(this, _amount) * this.rate).toFixed(2);
    }
    getReceipt() {
        return `Exchanged ${__classPrivateFieldGet(this, _amount)}$ into ` + this.getAmountAfterExchange() + ` DKK.`;
    }
}
_amount = new WeakMap();
class RiggedExchanger extends MoneyExchanger {
    constructor(theAmount, theRate) {
        super(theAmount);
        this.rate = theRate;
    }
}
const moneyExchanger = new MoneyExchanger(10);
const riggedExchanger = new RiggedExchanger(10, 5.9);
console.log(moneyExchanger.getReceipt());
console.log(riggedExchanger.getReceipt());
