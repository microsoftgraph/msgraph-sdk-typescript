"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConsentRequest = void 0;
var approval_1 = require("./appConsentRequests/userConsentRequests/approval/approval");
var request_1 = require("./request");
var UserConsentRequest = /** @class */ (function (_super) {
    __extends(UserConsentRequest, _super);
    /**
     * Instantiates a new userConsentRequest and sets the default values.
     */
    function UserConsentRequest() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(UserConsentRequest.prototype, "approval", {
        /**
         * Gets the approval property value. Approval decisions associated with a request.
         * @returns a approval
         */
        get: function () {
            return this._approval;
        },
        /**
         * Sets the approval property value. Approval decisions associated with a request.
         * @param value Value to set for the approval property.
         */
        set: function (value) {
            this._approval = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserConsentRequest.prototype, "reason", {
        /**
         * Gets the reason property value. The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby.
         * @returns a string
         */
        get: function () {
            return this._reason;
        },
        /**
         * Sets the reason property value. The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby.
         * @param value Value to set for the reason property.
         */
        set: function (value) {
            this._reason = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    UserConsentRequest.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["approval", function (o, n) { o.approval = n.getObjectValue(approval_1.Approval); }],
            ["reason", function (o, n) { o.reason = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    UserConsentRequest.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("approval", this.approval);
        writer.writeStringValue("reason", this.reason);
    };
    ;
    ;
    ;
    return UserConsentRequest;
}(request_1.Request));
exports.UserConsentRequest = UserConsentRequest;
