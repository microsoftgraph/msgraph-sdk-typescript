"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifiedDomain = void 0;
var VerifiedDomain = /** @class */ (function () {
    /**
     * Instantiates a new verifiedDomain and sets the default values.
     */
    function VerifiedDomain() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(VerifiedDomain.prototype, "additionalData", {
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
    Object.defineProperty(VerifiedDomain.prototype, "capabilities", {
        /**
         * Gets the capabilities property value. For example, 'Email', 'OfficeCommunicationsOnline'.
         * @returns a string
         */
        get: function () {
            return this._capabilities;
        },
        /**
         * Sets the capabilities property value. For example, 'Email', 'OfficeCommunicationsOnline'.
         * @param value Value to set for the capabilities property.
         */
        set: function (value) {
            this._capabilities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VerifiedDomain.prototype, "isDefault", {
        /**
         * Gets the isDefault property value. true if this is the default domain associated with the tenant; otherwise, false.
         * @returns a boolean
         */
        get: function () {
            return this._isDefault;
        },
        /**
         * Sets the isDefault property value. true if this is the default domain associated with the tenant; otherwise, false.
         * @param value Value to set for the isDefault property.
         */
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VerifiedDomain.prototype, "isInitial", {
        /**
         * Gets the isInitial property value. true if this is the initial domain associated with the tenant; otherwise, false
         * @returns a boolean
         */
        get: function () {
            return this._isInitial;
        },
        /**
         * Sets the isInitial property value. true if this is the initial domain associated with the tenant; otherwise, false
         * @param value Value to set for the isInitial property.
         */
        set: function (value) {
            this._isInitial = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VerifiedDomain.prototype, "name", {
        /**
         * Gets the name property value. The domain name; for example, 'contoso.onmicrosoft.com'
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The domain name; for example, 'contoso.onmicrosoft.com'
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VerifiedDomain.prototype, "type", {
        /**
         * Gets the type property value. For example, 'Managed'.
         * @returns a string
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. For example, 'Managed'.
         * @param value Value to set for the type property.
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    VerifiedDomain.prototype.getFieldDeserializers = function () {
        return new Map([
            ["capabilities", function (o, n) { o.capabilities = n.getStringValue(); }],
            ["isDefault", function (o, n) { o.isDefault = n.getBooleanValue(); }],
            ["isInitial", function (o, n) { o.isInitial = n.getBooleanValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    VerifiedDomain.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("capabilities", this.capabilities);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isInitial", this.isInitial);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return VerifiedDomain;
}());
exports.VerifiedDomain = VerifiedDomain;
