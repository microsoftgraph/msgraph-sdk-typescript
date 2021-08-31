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
exports.IdentityUserFlowAttributeAssignment = void 0;
var entity_1 = require("../entity");
var identityUserFlowAttribute_1 = require("./identityUserFlowAttribute");
var IdentityUserFlowAttributeAssignment = /** @class */ (function (_super) {
    __extends(IdentityUserFlowAttributeAssignment, _super);
    /**
     * Instantiates a new identityUserFlowAttributeAssignment and sets the default values.
     */
    function IdentityUserFlowAttributeAssignment() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(IdentityUserFlowAttributeAssignment.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name of the identityUserFlowAttribute within a user flow.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name of the identityUserFlowAttribute within a user flow.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityUserFlowAttributeAssignment.prototype, "isOptional", {
        /**
         * Gets the isOptional property value. Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value.
         * @returns a boolean
         */
        get: function () {
            return this._isOptional;
        },
        /**
         * Sets the isOptional property value. Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value.
         * @param value Value to set for the isOptional property.
         */
        set: function (value) {
            this._isOptional = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityUserFlowAttributeAssignment.prototype, "requiresVerification", {
        /**
         * Gets the requiresVerification property value. Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address.
         * @returns a boolean
         */
        get: function () {
            return this._requiresVerification;
        },
        /**
         * Sets the requiresVerification property value. Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address.
         * @param value Value to set for the requiresVerification property.
         */
        set: function (value) {
            this._requiresVerification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityUserFlowAttributeAssignment.prototype, "userAttribute", {
        /**
         * Gets the userAttribute property value. The user attribute that you want to add to your user flow.
         * @returns a identityUserFlowAttribute
         */
        get: function () {
            return this._userAttribute;
        },
        /**
         * Sets the userAttribute property value. The user attribute that you want to add to your user flow.
         * @param value Value to set for the userAttribute property.
         */
        set: function (value) {
            this._userAttribute = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityUserFlowAttributeAssignment.prototype, "userAttributeValues", {
        /**
         * Gets the userAttributeValues property value. The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect.
         * @returns a userAttributeValuesItem
         */
        get: function () {
            return this._userAttributeValues;
        },
        /**
         * Sets the userAttributeValues property value. The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect.
         * @param value Value to set for the userAttributeValues property.
         */
        set: function (value) {
            this._userAttributeValues = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityUserFlowAttributeAssignment.prototype, "userInputType", {
        /**
         * Gets the userInputType property value. The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect.
         * @returns a identityUserFlowAttributeInputType
         */
        get: function () {
            return this._userInputType;
        },
        /**
         * Sets the userInputType property value. The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect.
         * @param value Value to set for the userInputType property.
         */
        set: function (value) {
            this._userInputType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    IdentityUserFlowAttributeAssignment.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["isOptional", function (o, n) { o.isOptional = n.getBooleanValue(); }],
            ["requiresVerification", function (o, n) { o.requiresVerification = n.getBooleanValue(); }],
            ["userAttribute", function (o, n) { o.userAttribute = n.getObjectValue(identityUserFlowAttribute_1.IdentityUserFlowAttribute); }],
            ["userAttributeValues", function (o, n) { o.userAttributeValues = n.getCollectionOfPrimitiveValues(); }],
            ["userInputType", function (o, n) { o.userInputType = n.getObjectValue(IdentityUserFlowAttributeInputType); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    IdentityUserFlowAttributeAssignment.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isOptional", this.isOptional);
        writer.writeBooleanValue("requiresVerification", this.requiresVerification);
        writer.writeObjectValue("userAttribute", this.userAttribute);
        writer.writeCollectionOfPrimitiveValues("userAttributeValues", this.userAttributeValues);
        writer.writeObjectValue("userInputType", this.userInputType);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return IdentityUserFlowAttributeAssignment;
}(entity_1.Entity));
exports.IdentityUserFlowAttributeAssignment = IdentityUserFlowAttributeAssignment;
