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
exports.ApplePushNotificationCertificate = void 0;
var entity_1 = require("../../entity");
var ApplePushNotificationCertificate = /** @class */ (function (_super) {
    __extends(ApplePushNotificationCertificate, _super);
    /**
     * Instantiates a new ApplePushNotificationCertificate and sets the default values.
     */
    function ApplePushNotificationCertificate() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ApplePushNotificationCertificate.prototype, "appleIdentifier", {
        /**
         * Gets the appleIdentifier property value. Apple Id of the account used to create the MDM push certificate.
         * @returns a string
         */
        get: function () {
            return this._appleIdentifier;
        },
        /**
         * Sets the appleIdentifier property value. Apple Id of the account used to create the MDM push certificate.
         * @param value Value to set for the appleIdentifier property.
         */
        set: function (value) {
            this._appleIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplePushNotificationCertificate.prototype, "certificate", {
        /**
         * Gets the certificate property value. Not yet documented
         * @returns a string
         */
        get: function () {
            return this._certificate;
        },
        /**
         * Sets the certificate property value. Not yet documented
         * @param value Value to set for the certificate property.
         */
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplePushNotificationCertificate.prototype, "certificateSerialNumber", {
        /**
         * Gets the certificateSerialNumber property value. Certificate serial number. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._certificateSerialNumber;
        },
        /**
         * Sets the certificateSerialNumber property value. Certificate serial number. This property is read-only.
         * @param value Value to set for the certificateSerialNumber property.
         */
        set: function (value) {
            this._certificateSerialNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplePushNotificationCertificate.prototype, "expirationDateTime", {
        /**
         * Gets the expirationDateTime property value. The expiration date and time for Apple push notification certificate.
         * @returns a Date
         */
        get: function () {
            return this._expirationDateTime;
        },
        /**
         * Sets the expirationDateTime property value. The expiration date and time for Apple push notification certificate.
         * @param value Value to set for the expirationDateTime property.
         */
        set: function (value) {
            this._expirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplePushNotificationCertificate.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Last modified date and time for Apple push notification certificate.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Last modified date and time for Apple push notification certificate.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplePushNotificationCertificate.prototype, "topicIdentifier", {
        /**
         * Gets the topicIdentifier property value. Topic Id.
         * @returns a string
         */
        get: function () {
            return this._topicIdentifier;
        },
        /**
         * Sets the topicIdentifier property value. Topic Id.
         * @param value Value to set for the topicIdentifier property.
         */
        set: function (value) {
            this._topicIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ApplePushNotificationCertificate.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appleIdentifier", function (o, n) { o.appleIdentifier = n.getStringValue(); }],
            ["certificate", function (o, n) { o.certificate = n.getStringValue(); }],
            ["certificateSerialNumber", function (o, n) { o.certificateSerialNumber = n.getStringValue(); }],
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["topicIdentifier", function (o, n) { o.topicIdentifier = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ApplePushNotificationCertificate.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("appleIdentifier", this.appleIdentifier);
        writer.writeStringValue("certificate", this.certificate);
        writer.writeStringValue("certificateSerialNumber", this.certificateSerialNumber);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("topicIdentifier", this.topicIdentifier);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ApplePushNotificationCertificate;
}(entity_1.Entity));
exports.ApplePushNotificationCertificate = ApplePushNotificationCertificate;
