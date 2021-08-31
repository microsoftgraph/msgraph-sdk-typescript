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
exports.IdentityUserFlowAttribute = void 0;
var entity_1 = require("../entity");
var IdentityUserFlowAttribute = /** @class */ (function (_super) {
    __extends(IdentityUserFlowAttribute, _super);
    /**
     * Instantiates a new identityUserFlowAttribute and sets the default values.
     */
    function IdentityUserFlowAttribute() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(IdentityUserFlowAttribute.prototype, "dataType", {
        /**
         * Gets the dataType property value. The data type of the user flow attribute. This cannot be modified after the custom user flow attribute is created. The supported values for dataType are: string , boolean , int64 , stringCollection , dateTime.
         * @returns a identityUserFlowAttributeDataType
         */
        get: function () {
            return this._dataType;
        },
        /**
         * Sets the dataType property value. The data type of the user flow attribute. This cannot be modified after the custom user flow attribute is created. The supported values for dataType are: string , boolean , int64 , stringCollection , dateTime.
         * @param value Value to set for the dataType property.
         */
        set: function (value) {
            this._dataType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityUserFlowAttribute.prototype, "description", {
        /**
         * Gets the description property value. The description of the user flow attribute that's shown to the user at the time of sign-up.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. The description of the user flow attribute that's shown to the user at the time of sign-up.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityUserFlowAttribute.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name of the user flow attribute.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name of the user flow attribute.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityUserFlowAttribute.prototype, "userFlowAttributeType", {
        /**
         * Gets the userFlowAttributeType property value. The type of the user flow attribute. This is a read-only attribute that is automatically set. Depending on the type of attribute, the values for this property will be builtIn, custom, or required.
         * @returns a identityUserFlowAttributeType
         */
        get: function () {
            return this._userFlowAttributeType;
        },
        /**
         * Sets the userFlowAttributeType property value. The type of the user flow attribute. This is a read-only attribute that is automatically set. Depending on the type of attribute, the values for this property will be builtIn, custom, or required.
         * @param value Value to set for the userFlowAttributeType property.
         */
        set: function (value) {
            this._userFlowAttributeType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    IdentityUserFlowAttribute.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["dataType", function (o, n) { o.dataType = n.getObjectValue(IdentityUserFlowAttributeDataType); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["userFlowAttributeType", function (o, n) { o.userFlowAttributeType = n.getObjectValue(IdentityUserFlowAttributeType); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    IdentityUserFlowAttribute.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("dataType", this.dataType);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("userFlowAttributeType", this.userFlowAttributeType);
    };
    ;
    ;
    ;
    ;
    ;
    return IdentityUserFlowAttribute;
}(entity_1.Entity));
exports.IdentityUserFlowAttribute = IdentityUserFlowAttribute;
