"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const User = require('../lib/User');
module.exports.checkOptions = (headerObj, options) => {
    const copy = JSON.parse(JSON.stringify(headerObj));
    if (options.fingerprint) {
        copy.fingerprint = options.fingerprint;
    }
    if (options.ip_address) {
        copy.ip_address = options.ip_address;
    }
    if (options.full_dehydrate) {
        copy.full_dehydrate = options.full_dehydrate;
    }
    if (options.idempotency_key) {
        copy.idempotency_key = options.idempotency_key;
    }
    return copy;
};
module.exports.instantiateUser = ({ data, headerObj, client }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield new User({ data, headerObj, client });
    yield user._oauthUser({ refresh_token: user.body.refresh_token });
    return user;
});
