"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppIdentity = void 0;
var AppIdentity = /** @class */ (function () {
    /**
     * Instantiates a new appIdentity and sets the default values.
     */
    function AppIdentity() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(AppIdentity.prototype, "additionalData", {
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
    Object.defineProperty(AppIdentity.prototype, "appId", {
        /**
         * Gets the appId property value. Refers to the Unique GUID representing Application Id in the Azure Active Directory.
         * @returns a string
         */
        get: function () {
            return this._appId;
        },
        /**
         * Sets the appId property value. Refers to the Unique GUID representing Application Id in the Azure Active Directory.
         * @param value Value to set for the appId property.
         */
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppIdentity.prototype, "displayName", {
        /**
         * Gets the displayName property value. Refers to the Application Name displayed in the Azure Portal.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Refers to the Application Name displayed in the Azure Portal.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppIdentity.prototype, "servicePrincipalId", {
        /**
         * Gets the servicePrincipalId property value. Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.
         * @returns a string
         */
        get: function () {
            return this._servicePrincipalId;
        },
        /**
         * Sets the servicePrincipalId property value. Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.
         * @param value Value to set for the servicePrincipalId property.
         */
        set: function (value) {
            this._servicePrincipalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppIdentity.prototype, "servicePrincipalName", {
        /**
         * Gets the servicePrincipalName property value. Refers to the Service Principal Name is the Application name in the tenant.
         * @returns a string
         */
        get: function () {
            return this._servicePrincipalName;
        },
        /**
         * Sets the servicePrincipalName property value. Refers to the Service Principal Name is the Application name in the tenant.
         * @param value Value to set for the servicePrincipalName property.
         */
        set: function (value) {
            this._servicePrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AppIdentity.prototype.getFieldDeserializers = function () {
        return new Map([
            ["appId", function (o, n) { o.appId = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["servicePrincipalId", function (o, n) { o.servicePrincipalId = n.getStringValue(); }],
            ["servicePrincipalName", function (o, n) { o.servicePrincipalName = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AppIdentity.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("servicePrincipalId", this.servicePrincipalId);
        writer.writeStringValue("servicePrincipalName", this.servicePrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return AppIdentity;
}());
exports.AppIdentity = AppIdentity;
