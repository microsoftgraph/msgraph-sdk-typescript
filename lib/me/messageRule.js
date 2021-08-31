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
exports.MessageRule = void 0;
var entity_1 = require("../entity");
var MessageRule = /** @class */ (function (_super) {
    __extends(MessageRule, _super);
    /**
     * Instantiates a new messageRule and sets the default values.
     */
    function MessageRule() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(MessageRule.prototype, "actions", {
        /**
         * Gets the actions property value. Actions to be taken on a message when the corresponding conditions are fulfilled.
         * @returns a messageRuleActions
         */
        get: function () {
            return this._actions;
        },
        /**
         * Sets the actions property value. Actions to be taken on a message when the corresponding conditions are fulfilled.
         * @param value Value to set for the actions property.
         */
        set: function (value) {
            this._actions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MessageRule.prototype, "conditions", {
        /**
         * Gets the conditions property value. Conditions that when fulfilled, will trigger the corresponding actions for that rule.
         * @returns a messageRulePredicates
         */
        get: function () {
            return this._conditions;
        },
        /**
         * Sets the conditions property value. Conditions that when fulfilled, will trigger the corresponding actions for that rule.
         * @param value Value to set for the conditions property.
         */
        set: function (value) {
            this._conditions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MessageRule.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name of the rule.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name of the rule.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MessageRule.prototype, "exceptions", {
        /**
         * Gets the exceptions property value. Exception conditions for the rule.
         * @returns a messageRulePredicates
         */
        get: function () {
            return this._exceptions;
        },
        /**
         * Sets the exceptions property value. Exception conditions for the rule.
         * @param value Value to set for the exceptions property.
         */
        set: function (value) {
            this._exceptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MessageRule.prototype, "hasError", {
        /**
         * Gets the hasError property value. Indicates whether the rule is in an error condition. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._hasError;
        },
        /**
         * Sets the hasError property value. Indicates whether the rule is in an error condition. Read-only.
         * @param value Value to set for the hasError property.
         */
        set: function (value) {
            this._hasError = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MessageRule.prototype, "isEnabled", {
        /**
         * Gets the isEnabled property value. Indicates whether the rule is enabled to be applied to messages.
         * @returns a boolean
         */
        get: function () {
            return this._isEnabled;
        },
        /**
         * Sets the isEnabled property value. Indicates whether the rule is enabled to be applied to messages.
         * @param value Value to set for the isEnabled property.
         */
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MessageRule.prototype, "isReadOnly", {
        /**
         * Gets the isReadOnly property value. Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
         * @returns a boolean
         */
        get: function () {
            return this._isReadOnly;
        },
        /**
         * Sets the isReadOnly property value. Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
         * @param value Value to set for the isReadOnly property.
         */
        set: function (value) {
            this._isReadOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MessageRule.prototype, "sequence", {
        /**
         * Gets the sequence property value. Indicates the order in which the rule is executed, among other rules.
         * @returns a integer
         */
        get: function () {
            return this._sequence;
        },
        /**
         * Sets the sequence property value. Indicates the order in which the rule is executed, among other rules.
         * @param value Value to set for the sequence property.
         */
        set: function (value) {
            this._sequence = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    MessageRule.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["actions", function (o, n) { o.actions = n.getObjectValue(MessageRuleActions); }],
            ["conditions", function (o, n) { o.conditions = n.getObjectValue(MessageRulePredicates); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["exceptions", function (o, n) { o.exceptions = n.getObjectValue(MessageRulePredicates); }],
            ["hasError", function (o, n) { o.hasError = n.getBooleanValue(); }],
            ["isEnabled", function (o, n) { o.isEnabled = n.getBooleanValue(); }],
            ["isReadOnly", function (o, n) { o.isReadOnly = n.getBooleanValue(); }],
            ["sequence", function (o, n) { o.sequence = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    MessageRule.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("actions", this.actions);
        writer.writeObjectValue("conditions", this.conditions);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("exceptions", this.exceptions);
        writer.writeBooleanValue("hasError", this.hasError);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeBooleanValue("isReadOnly", this.isReadOnly);
        writer.writeNumberValue("sequence", this.sequence);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return MessageRule;
}(entity_1.Entity));
exports.MessageRule = MessageRule;
