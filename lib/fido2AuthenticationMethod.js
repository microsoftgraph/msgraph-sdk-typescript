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
exports.Fido2AuthenticationMethod = void 0;
var authenticationMethod_1 = require("./authenticationMethod");
var Fido2AuthenticationMethod = /** @class */ (function (_super) {
    __extends(Fido2AuthenticationMethod, _super);
    /**
     * Instantiates a new fido2AuthenticationMethod and sets the default values.
     */
    function Fido2AuthenticationMethod() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Fido2AuthenticationMethod.prototype, "aaGuid", {
        /**
         * Gets the aaGuid property value. Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator.
         * @returns a string
         */
        get: function () {
            return this._aaGuid;
        },
        /**
         * Sets the aaGuid property value. Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator.
         * @param value Value to set for the aaGuid property.
         */
        set: function (value) {
            this._aaGuid = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Fido2AuthenticationMethod.prototype, "attestationCertificates", {
        /**
         * Gets the attestationCertificates property value. The attestation certificate(s) attached to this security key.
         * @returns a string
         */
        get: function () {
            return this._attestationCertificates;
        },
        /**
         * Sets the attestationCertificates property value. The attestation certificate(s) attached to this security key.
         * @param value Value to set for the attestationCertificates property.
         */
        set: function (value) {
            this._attestationCertificates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Fido2AuthenticationMethod.prototype, "attestationLevel", {
        /**
         * Gets the attestationLevel property value. The attestation level of this FIDO2 security key. Possible values are: attested, notAttested, unknownFutureValue.
         * @returns a attestationLevel
         */
        get: function () {
            return this._attestationLevel;
        },
        /**
         * Sets the attestationLevel property value. The attestation level of this FIDO2 security key. Possible values are: attested, notAttested, unknownFutureValue.
         * @param value Value to set for the attestationLevel property.
         */
        set: function (value) {
            this._attestationLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Fido2AuthenticationMethod.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The timestamp when this key was registered to the user.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The timestamp when this key was registered to the user.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Fido2AuthenticationMethod.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name of the key as given by the user.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name of the key as given by the user.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Fido2AuthenticationMethod.prototype, "model", {
        /**
         * Gets the model property value. The manufacturer-assigned model of the FIDO2 security key.
         * @returns a string
         */
        get: function () {
            return this._model;
        },
        /**
         * Sets the model property value. The manufacturer-assigned model of the FIDO2 security key.
         * @param value Value to set for the model property.
         */
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Fido2AuthenticationMethod.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["aaGuid", function (o, n) { o.aaGuid = n.getStringValue(); }],
            ["attestationCertificates", function (o, n) { o.attestationCertificates = n.getCollectionOfPrimitiveValues(); }],
            ["attestationLevel", function (o, n) { o.attestationLevel = n.getObjectValue(AttestationLevel); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["model", function (o, n) { o.model = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Fido2AuthenticationMethod.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("aaGuid", this.aaGuid);
        writer.writeCollectionOfPrimitiveValues("attestationCertificates", this.attestationCertificates);
        writer.writeObjectValue("attestationLevel", this.attestationLevel);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("model", this.model);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return Fido2AuthenticationMethod;
}(authenticationMethod_1.AuthenticationMethod));
exports.Fido2AuthenticationMethod = Fido2AuthenticationMethod;
