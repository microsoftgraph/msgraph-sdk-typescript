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
exports.StsPolicy = void 0;
var directoryObject_1 = require("./directoryObject");
var policyBase_1 = require("./policyBase");
var StsPolicy = /** @class */ (function (_super) {
    __extends(StsPolicy, _super);
    /**
     * Instantiates a new stsPolicy and sets the default values.
     */
    function StsPolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(StsPolicy.prototype, "appliesTo", {
        /**
         * Gets the appliesTo property value.
         * @returns a directoryObject
         */
        get: function () {
            return this._appliesTo;
        },
        /**
         * Sets the appliesTo property value.
         * @param value Value to set for the appliesTo property.
         */
        set: function (value) {
            this._appliesTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(StsPolicy.prototype, "definition", {
        /**
         * Gets the definition property value. A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required.
         * @returns a string
         */
        get: function () {
            return this._definition;
        },
        /**
         * Sets the definition property value. A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required.
         * @param value Value to set for the definition property.
         */
        set: function (value) {
            this._definition = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(StsPolicy.prototype, "isOrganizationDefault", {
        /**
         * Gets the isOrganizationDefault property value. If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false.
         * @returns a boolean
         */
        get: function () {
            return this._isOrganizationDefault;
        },
        /**
         * Sets the isOrganizationDefault property value. If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false.
         * @param value Value to set for the isOrganizationDefault property.
         */
        set: function (value) {
            this._isOrganizationDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    StsPolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appliesTo", function (o, n) { o.appliesTo = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["definition", function (o, n) { o.definition = n.getCollectionOfPrimitiveValues(); }],
            ["isOrganizationDefault", function (o, n) { o.isOrganizationDefault = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    StsPolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("appliesTo", this.appliesTo);
        writer.writeCollectionOfPrimitiveValues("definition", this.definition);
        writer.writeBooleanValue("isOrganizationDefault", this.isOrganizationDefault);
    };
    ;
    ;
    ;
    ;
    return StsPolicy;
}(policyBase_1.PolicyBase));
exports.StsPolicy = StsPolicy;
