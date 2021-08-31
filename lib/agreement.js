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
exports.Agreement = void 0;
var agreementAcceptance_1 = require("./agreementAcceptance");
var agreementFileLocalization_1 = require("./agreementFileLocalization");
var agreementFile_1 = require("./agreements/file/agreementFile");
var entity_1 = require("./entity");
var Agreement = /** @class */ (function (_super) {
    __extends(Agreement, _super);
    /**
     * Instantiates a new agreement and sets the default values.
     */
    function Agreement() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Agreement.prototype, "acceptances", {
        /**
         * Gets the acceptances property value. Read-only. Information about acceptances of this agreement.
         * @returns a agreementAcceptance
         */
        get: function () {
            return this._acceptances;
        },
        /**
         * Sets the acceptances property value. Read-only. Information about acceptances of this agreement.
         * @param value Value to set for the acceptances property.
         */
        set: function (value) {
            this._acceptances = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Agreement.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Agreement.prototype, "file", {
        /**
         * Gets the file property value. Default PDF linked to this agreement.
         * @returns a agreementFile
         */
        get: function () {
            return this._file;
        },
        /**
         * Sets the file property value. Default PDF linked to this agreement.
         * @param value Value to set for the file property.
         */
        set: function (value) {
            this._file = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Agreement.prototype, "files", {
        /**
         * Gets the files property value. PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.
         * @returns a agreementFileLocalization
         */
        get: function () {
            return this._files;
        },
        /**
         * Sets the files property value. PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.
         * @param value Value to set for the files property.
         */
        set: function (value) {
            this._files = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Agreement.prototype, "isPerDeviceAcceptanceRequired", {
        /**
         * Gets the isPerDeviceAcceptanceRequired property value. This setting enables you to require end users to accept this agreement on every device that they are accessing it from. The end user will be required to register their device in Azure AD, if they haven't already done so.
         * @returns a boolean
         */
        get: function () {
            return this._isPerDeviceAcceptanceRequired;
        },
        /**
         * Sets the isPerDeviceAcceptanceRequired property value. This setting enables you to require end users to accept this agreement on every device that they are accessing it from. The end user will be required to register their device in Azure AD, if they haven't already done so.
         * @param value Value to set for the isPerDeviceAcceptanceRequired property.
         */
        set: function (value) {
            this._isPerDeviceAcceptanceRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Agreement.prototype, "isViewingBeforeAcceptanceRequired", {
        /**
         * Gets the isViewingBeforeAcceptanceRequired property value. Indicates whether the user has to expand the agreement before accepting.
         * @returns a boolean
         */
        get: function () {
            return this._isViewingBeforeAcceptanceRequired;
        },
        /**
         * Sets the isViewingBeforeAcceptanceRequired property value. Indicates whether the user has to expand the agreement before accepting.
         * @param value Value to set for the isViewingBeforeAcceptanceRequired property.
         */
        set: function (value) {
            this._isViewingBeforeAcceptanceRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Agreement.prototype, "termsExpiration", {
        /**
         * Gets the termsExpiration property value. Expiration schedule and frequency of agreement for all users.
         * @returns a termsExpiration
         */
        get: function () {
            return this._termsExpiration;
        },
        /**
         * Sets the termsExpiration property value. Expiration schedule and frequency of agreement for all users.
         * @param value Value to set for the termsExpiration property.
         */
        set: function (value) {
            this._termsExpiration = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Agreement.prototype, "userReacceptRequiredFrequency", {
        /**
         * Gets the userReacceptRequiredFrequency property value. The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations.
         * @returns a string
         */
        get: function () {
            return this._userReacceptRequiredFrequency;
        },
        /**
         * Sets the userReacceptRequiredFrequency property value. The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations.
         * @param value Value to set for the userReacceptRequiredFrequency property.
         */
        set: function (value) {
            this._userReacceptRequiredFrequency = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Agreement.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["acceptances", function (o, n) { o.acceptances = n.getCollectionOfObjectValues(agreementAcceptance_1.AgreementAcceptance); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["file", function (o, n) { o.file = n.getObjectValue(agreementFile_1.AgreementFile); }],
            ["files", function (o, n) { o.files = n.getCollectionOfObjectValues(agreementFileLocalization_1.AgreementFileLocalization); }],
            ["isPerDeviceAcceptanceRequired", function (o, n) { o.isPerDeviceAcceptanceRequired = n.getBooleanValue(); }],
            ["isViewingBeforeAcceptanceRequired", function (o, n) { o.isViewingBeforeAcceptanceRequired = n.getBooleanValue(); }],
            ["termsExpiration", function (o, n) { o.termsExpiration = n.getObjectValue(TermsExpiration); }],
            ["userReacceptRequiredFrequency", function (o, n) { o.userReacceptRequiredFrequency = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Agreement.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("acceptances", this.acceptances);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("file", this.file);
        writer.writeCollectionOfObjectValues("files", this.files);
        writer.writeBooleanValue("isPerDeviceAcceptanceRequired", this.isPerDeviceAcceptanceRequired);
        writer.writeBooleanValue("isViewingBeforeAcceptanceRequired", this.isViewingBeforeAcceptanceRequired);
        writer.writeObjectValue("termsExpiration", this.termsExpiration);
        writer.writeStringValue("userReacceptRequiredFrequency", this.userReacceptRequiredFrequency);
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
    return Agreement;
}(entity_1.Entity));
exports.Agreement = Agreement;
