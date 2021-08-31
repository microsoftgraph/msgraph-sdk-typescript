"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateAuthority = void 0;
var CertificateAuthority = /** @class */ (function () {
    /**
     * Instantiates a new certificateAuthority and sets the default values.
     */
    function CertificateAuthority() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(CertificateAuthority.prototype, "additionalData", {
        /**
         * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @returns a Map<string, unknown>
         */
        get: function () {
            return this._additionalData;
        },
        /**
         * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @param value Value to set for the AdditionalData property.
         */
        set: function (value) {
            this._additionalData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CertificateAuthority.prototype, "certificate", {
        /**
         * Gets the certificate property value. Required. The base64 encoded string representing the public certificate.
         * @returns a binary
         */
        get: function () {
            return this._certificate;
        },
        /**
         * Sets the certificate property value. Required. The base64 encoded string representing the public certificate.
         * @param value Value to set for the certificate property.
         */
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CertificateAuthority.prototype, "certificateRevocationListUrl", {
        /**
         * Gets the certificateRevocationListUrl property value. The URL of the certificate revocation list.
         * @returns a string
         */
        get: function () {
            return this._certificateRevocationListUrl;
        },
        /**
         * Sets the certificateRevocationListUrl property value. The URL of the certificate revocation list.
         * @param value Value to set for the certificateRevocationListUrl property.
         */
        set: function (value) {
            this._certificateRevocationListUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CertificateAuthority.prototype, "deltaCertificateRevocationListUrl", {
        /**
         * Gets the deltaCertificateRevocationListUrl property value. The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created.
         * @returns a string
         */
        get: function () {
            return this._deltaCertificateRevocationListUrl;
        },
        /**
         * Sets the deltaCertificateRevocationListUrl property value. The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created.
         * @param value Value to set for the deltaCertificateRevocationListUrl property.
         */
        set: function (value) {
            this._deltaCertificateRevocationListUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CertificateAuthority.prototype, "isRootAuthority", {
        /**
         * Gets the isRootAuthority property value. Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority.
         * @returns a boolean
         */
        get: function () {
            return this._isRootAuthority;
        },
        /**
         * Sets the isRootAuthority property value. Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority.
         * @param value Value to set for the isRootAuthority property.
         */
        set: function (value) {
            this._isRootAuthority = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CertificateAuthority.prototype, "issuer", {
        /**
         * Gets the issuer property value. The issuer of the certificate, calculated from the certificate value. Read-only.
         * @returns a string
         */
        get: function () {
            return this._issuer;
        },
        /**
         * Sets the issuer property value. The issuer of the certificate, calculated from the certificate value. Read-only.
         * @param value Value to set for the issuer property.
         */
        set: function (value) {
            this._issuer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CertificateAuthority.prototype, "issuerSki", {
        /**
         * Gets the issuerSki property value. The subject key identifier of the certificate, calculated from the certificate value. Read-only.
         * @returns a string
         */
        get: function () {
            return this._issuerSki;
        },
        /**
         * Sets the issuerSki property value. The subject key identifier of the certificate, calculated from the certificate value. Read-only.
         * @param value Value to set for the issuerSki property.
         */
        set: function (value) {
            this._issuerSki = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    CertificateAuthority.prototype.getFieldDeserializers = function () {
        return new Map([
            ["certificate", function (o, n) { o.certificate = n.getObjectValue(Binary); }],
            ["certificateRevocationListUrl", function (o, n) { o.certificateRevocationListUrl = n.getStringValue(); }],
            ["deltaCertificateRevocationListUrl", function (o, n) { o.deltaCertificateRevocationListUrl = n.getStringValue(); }],
            ["isRootAuthority", function (o, n) { o.isRootAuthority = n.getBooleanValue(); }],
            ["issuer", function (o, n) { o.issuer = n.getStringValue(); }],
            ["issuerSki", function (o, n) { o.issuerSki = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    CertificateAuthority.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("certificate", this.certificate);
        writer.writeStringValue("certificateRevocationListUrl", this.certificateRevocationListUrl);
        writer.writeStringValue("deltaCertificateRevocationListUrl", this.deltaCertificateRevocationListUrl);
        writer.writeBooleanValue("isRootAuthority", this.isRootAuthority);
        writer.writeStringValue("issuer", this.issuer);
        writer.writeStringValue("issuerSki", this.issuerSki);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return CertificateAuthority;
}());
exports.CertificateAuthority = CertificateAuthority;
