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
exports.EducationOrganization = void 0;
var entity_1 = require("../entity");
var EducationOrganization = /** @class */ (function (_super) {
    __extends(EducationOrganization, _super);
    /**
     * Instantiates a new educationOrganization and sets the default values.
     */
    function EducationOrganization() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EducationOrganization.prototype, "description", {
        /**
         * Gets the description property value. Organization description.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Organization description.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationOrganization.prototype, "displayName", {
        /**
         * Gets the displayName property value. Organization display name.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Organization display name.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationOrganization.prototype, "externalSource", {
        /**
         * Gets the externalSource property value. Where this user was created from. Possible values are: sis, lms, or manual.
         * @returns a educationExternalSource
         */
        get: function () {
            return this._externalSource;
        },
        /**
         * Sets the externalSource property value. Where this user was created from. Possible values are: sis, lms, or manual.
         * @param value Value to set for the externalSource property.
         */
        set: function (value) {
            this._externalSource = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationOrganization.prototype, "externalSourceDetail", {
        /**
         * Gets the externalSourceDetail property value. The name of the external source this resources was generated from.
         * @returns a string
         */
        get: function () {
            return this._externalSourceDetail;
        },
        /**
         * Sets the externalSourceDetail property value. The name of the external source this resources was generated from.
         * @param value Value to set for the externalSourceDetail property.
         */
        set: function (value) {
            this._externalSourceDetail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationOrganization.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["externalSource", function (o, n) { o.externalSource = n.getObjectValue(EducationExternalSource); }],
            ["externalSourceDetail", function (o, n) { o.externalSourceDetail = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationOrganization.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("externalSource", this.externalSource);
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
    };
    ;
    ;
    ;
    ;
    ;
    return EducationOrganization;
}(entity_1.Entity));
exports.EducationOrganization = EducationOrganization;
