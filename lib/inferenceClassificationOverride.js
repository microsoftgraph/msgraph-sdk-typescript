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
exports.InferenceClassificationOverride = void 0;
var entity_1 = require("./entity");
var InferenceClassificationOverride = /** @class */ (function (_super) {
    __extends(InferenceClassificationOverride, _super);
    /**
     * Instantiates a new inferenceClassificationOverride and sets the default values.
     */
    function InferenceClassificationOverride() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(InferenceClassificationOverride.prototype, "classifyAs", {
        /**
         * Gets the classifyAs property value. Specifies how incoming messages from a specific sender should always be classified as. Possible values are: focused, other.
         * @returns a inferenceClassificationType
         */
        get: function () {
            return this._classifyAs;
        },
        /**
         * Sets the classifyAs property value. Specifies how incoming messages from a specific sender should always be classified as. Possible values are: focused, other.
         * @param value Value to set for the classifyAs property.
         */
        set: function (value) {
            this._classifyAs = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(InferenceClassificationOverride.prototype, "senderEmailAddress", {
        /**
         * Gets the senderEmailAddress property value. The email address information of the sender for whom the override is created.
         * @returns a emailAddress
         */
        get: function () {
            return this._senderEmailAddress;
        },
        /**
         * Sets the senderEmailAddress property value. The email address information of the sender for whom the override is created.
         * @param value Value to set for the senderEmailAddress property.
         */
        set: function (value) {
            this._senderEmailAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    InferenceClassificationOverride.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["classifyAs", function (o, n) { o.classifyAs = n.getObjectValue(InferenceClassificationType); }],
            ["senderEmailAddress", function (o, n) { o.senderEmailAddress = n.getObjectValue(EmailAddress); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    InferenceClassificationOverride.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("classifyAs", this.classifyAs);
        writer.writeObjectValue("senderEmailAddress", this.senderEmailAddress);
    };
    ;
    ;
    ;
    return InferenceClassificationOverride;
}(entity_1.Entity));
exports.InferenceClassificationOverride = InferenceClassificationOverride;
