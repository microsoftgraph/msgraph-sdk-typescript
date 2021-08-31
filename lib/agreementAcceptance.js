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
exports.AgreementAcceptance = void 0;
var entity_1 = require("./entity");
var AgreementAcceptance = /** @class */ (function (_super) {
    __extends(AgreementAcceptance, _super);
    /**
     * Instantiates a new agreementAcceptance and sets the default values.
     */
    function AgreementAcceptance() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "agreementFileId", {
        /**
         * Gets the agreementFileId property value. ID of the agreement file accepted by the user.
         * @returns a string
         */
        get: function () {
            return this._agreementFileId;
        },
        /**
         * Sets the agreementFileId property value. ID of the agreement file accepted by the user.
         * @param value Value to set for the agreementFileId property.
         */
        set: function (value) {
            this._agreementFileId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "agreementId", {
        /**
         * Gets the agreementId property value. ID of the agreement.
         * @returns a string
         */
        get: function () {
            return this._agreementId;
        },
        /**
         * Sets the agreementId property value. ID of the agreement.
         * @param value Value to set for the agreementId property.
         */
        set: function (value) {
            this._agreementId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "deviceDisplayName", {
        /**
         * Gets the deviceDisplayName property value. The display name of the device used for accepting the agreement.
         * @returns a string
         */
        get: function () {
            return this._deviceDisplayName;
        },
        /**
         * Sets the deviceDisplayName property value. The display name of the device used for accepting the agreement.
         * @param value Value to set for the deviceDisplayName property.
         */
        set: function (value) {
            this._deviceDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "deviceId", {
        /**
         * Gets the deviceId property value. The unique identifier of the device used for accepting the agreement.
         * @returns a string
         */
        get: function () {
            return this._deviceId;
        },
        /**
         * Sets the deviceId property value. The unique identifier of the device used for accepting the agreement.
         * @param value Value to set for the deviceId property.
         */
        set: function (value) {
            this._deviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "deviceOSType", {
        /**
         * Gets the deviceOSType property value. The operating system used for accepting the agreement.
         * @returns a string
         */
        get: function () {
            return this._deviceOSType;
        },
        /**
         * Sets the deviceOSType property value. The operating system used for accepting the agreement.
         * @param value Value to set for the deviceOSType property.
         */
        set: function (value) {
            this._deviceOSType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "deviceOSVersion", {
        /**
         * Gets the deviceOSVersion property value. The operating system version of the device used for accepting the agreement.
         * @returns a string
         */
        get: function () {
            return this._deviceOSVersion;
        },
        /**
         * Sets the deviceOSVersion property value. The operating system version of the device used for accepting the agreement.
         * @param value Value to set for the deviceOSVersion property.
         */
        set: function (value) {
            this._deviceOSVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "expirationDateTime", {
        /**
         * Gets the expirationDateTime property value. The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._expirationDateTime;
        },
        /**
         * Sets the expirationDateTime property value. The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the expirationDateTime property.
         */
        set: function (value) {
            this._expirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "recordedDateTime", {
        /**
         * Gets the recordedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._recordedDateTime;
        },
        /**
         * Sets the recordedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the recordedDateTime property.
         */
        set: function (value) {
            this._recordedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "state", {
        /**
         * Gets the state property value. Possible values are: accepted, declined.
         * @returns a agreementAcceptanceState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. Possible values are: accepted, declined.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "userDisplayName", {
        /**
         * Gets the userDisplayName property value. Display name of the user when the acceptance was recorded.
         * @returns a string
         */
        get: function () {
            return this._userDisplayName;
        },
        /**
         * Sets the userDisplayName property value. Display name of the user when the acceptance was recorded.
         * @param value Value to set for the userDisplayName property.
         */
        set: function (value) {
            this._userDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "userEmail", {
        /**
         * Gets the userEmail property value. Email of the user when the acceptance was recorded.
         * @returns a string
         */
        get: function () {
            return this._userEmail;
        },
        /**
         * Sets the userEmail property value. Email of the user when the acceptance was recorded.
         * @param value Value to set for the userEmail property.
         */
        set: function (value) {
            this._userEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "userId", {
        /**
         * Gets the userId property value. ID of the user who accepted the agreement.
         * @returns a string
         */
        get: function () {
            return this._userId;
        },
        /**
         * Sets the userId property value. ID of the user who accepted the agreement.
         * @param value Value to set for the userId property.
         */
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AgreementAcceptance.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. UPN of the user when the acceptance was recorded.
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. UPN of the user when the acceptance was recorded.
         * @param value Value to set for the userPrincipalName property.
         */
        set: function (value) {
            this._userPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AgreementAcceptance.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["agreementFileId", function (o, n) { o.agreementFileId = n.getStringValue(); }],
            ["agreementId", function (o, n) { o.agreementId = n.getStringValue(); }],
            ["deviceDisplayName", function (o, n) { o.deviceDisplayName = n.getStringValue(); }],
            ["deviceId", function (o, n) { o.deviceId = n.getStringValue(); }],
            ["deviceOSType", function (o, n) { o.deviceOSType = n.getStringValue(); }],
            ["deviceOSVersion", function (o, n) { o.deviceOSVersion = n.getStringValue(); }],
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["recordedDateTime", function (o, n) { o.recordedDateTime = n.getDateValue(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(AgreementAcceptanceState); }],
            ["userDisplayName", function (o, n) { o.userDisplayName = n.getStringValue(); }],
            ["userEmail", function (o, n) { o.userEmail = n.getStringValue(); }],
            ["userId", function (o, n) { o.userId = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AgreementAcceptance.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("agreementFileId", this.agreementFileId);
        writer.writeStringValue("agreementId", this.agreementId);
        writer.writeStringValue("deviceDisplayName", this.deviceDisplayName);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceOSType", this.deviceOSType);
        writer.writeStringValue("deviceOSVersion", this.deviceOSVersion);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("recordedDateTime", this.recordedDateTime);
        writer.writeObjectValue("state", this.state);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userEmail", this.userEmail);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
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
    ;
    ;
    ;
    ;
    ;
    return AgreementAcceptance;
}(entity_1.Entity));
exports.AgreementAcceptance = AgreementAcceptance;
